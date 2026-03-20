<?php
// Simple contact form handler
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ./contato.php');
    exit;
}

$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (empty($name) || empty($email) || empty($message)) {
    header('Location: ./contato.php?error=1');
    exit;
}

// Send email
$to = 'contato@rvitalinoadvogados.com.br';
$subject = "Contato via site - $name";
$body = "Nome: $name\nE-mail: $email\nTelefone: $phone\n\nMensagem:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    header('Location: ./contato.php?success=1');
} else {
    header('Location: ./contato.php?error=2');
}
exit;
