import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

    // Send email via Locaweb SMTP
    let emailSent = false;
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    if (smtpPassword) {
      try {
        const client = new SmtpClient();

        await client.connectTLS({
          hostname: "smtplw.com.br",
          port: 587,
          username: "contato@rvitalinoadvogados.com.br",
          password: smtpPassword,
        });

        await client.send({
          from: "contato@rvitalinoadvogados.com.br",
          to: "contato@rvitalinoadvogados.com.br",
          subject: `Nova mensagem de contato: ${name}`,
          content: `Nova mensagem do site\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone || "Não informado"}\n\nMensagem:\n${message}\n\n---\nEnviado pelo formulário de contato do site rvitalinoadvogados.com.br`,
        });

        await client.close();
        emailSent = true;
      } catch (e) {
        console.error("SMTP send error:", e);
      }
    } else {
      console.error("SMTP_PASSWORD not configured");
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
