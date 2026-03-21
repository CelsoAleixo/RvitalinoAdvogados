<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization, apikey');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Simple auth token to prevent abuse
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$expectedToken = 'Bearer rvitalino-email-2026';
if ($authHeader !== $expectedToken) {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Nome, e-mail e mensagem são obrigatórios.']);
    exit;
}

$name = htmlspecialchars($input['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($input['email'], ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($input['phone'] ?? 'Não informado', ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($input['message'], ENT_QUOTES, 'UTF-8');

$to = 'contato@rvitalinoadvogados.com.br';
$subject = "Nova mensagem de contato: $name";

$htmlBody = "
<html>
<body style='font-family: Arial, sans-serif; color: #333;'>
<h2 style='color: #8B7355;'>Nova mensagem do site</h2>
<p><strong>Nome:</strong> $name</p>
<p><strong>E-mail:</strong> $email</p>
<p><strong>Telefone:</strong> $phone</p>
<hr style='border: 1px solid #ddd;'>
<p><strong>Mensagem:</strong></p>
<p>" . nl2br($message) . "</p>
<hr style='border: 1px solid #ddd;'>
<p style='font-size: 12px; color: #999;'>Enviado pelo formulário de contato do site rvitalinoadvogados.com.br</p>
</body>
</html>";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: contato@rvitalinoadvogados.com.br\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = mail($to, $subject, $htmlBody, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'emailSent' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Falha ao enviar e-mail.']);
}
