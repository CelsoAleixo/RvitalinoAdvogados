import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Nome, e-mail e mensagem são obrigatórios." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save to database
    const { error: dbError } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      message,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erro ao salvar mensagem." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email via Resend API
    let emailSent = false;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY present:", !!resendApiKey, "length:", resendApiKey?.length);

    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Site RV Advogados <contato@rvitalinoadvogados.com.br>",
            to: ["contato@rvitalinoadvogados.com.br"],
            reply_to: email,
            subject: `Nova mensagem de contato: ${name}`,
            html: `
              <h2 style="color: #8B7355;">Nova mensagem do site</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
              <hr style="border: 1px solid #ddd;">
              <p><strong>Mensagem:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
              <hr style="border: 1px solid #ddd;">
              <p style="font-size: 12px; color: #999;">Enviado pelo formulário de contato do site rvitalinoadvogados.com.br</p>
            `,
          }),
        });

        const emailData = await emailRes.json();
        emailSent = emailRes.ok;
        console.log("Resend status:", emailRes.status, "response:", JSON.stringify(emailData));
      } catch (e) {
        console.error("Resend error:", e);
      }
    } else {
      console.log("RESEND_API_KEY not configured - email not sent, but message saved to DB");
    }

    return new Response(
      JSON.stringify({ success: true, emailSent, saved: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
