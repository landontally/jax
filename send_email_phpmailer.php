<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

try {
    $mail->isSMTP();
    $mail->Host = 'smtpout.secureserver.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'landon@kksales.com'; // Your GoDaddy email address
    $mail->Password = 'Fantasy719!'; // Your GoDaddy email password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $name); // Use the user's email and name as the "from" address
    $mail->addAddress('landon@kksales.com', 'Landon Tally');

    $mail->isHTML(true);
    $mail->Subject = 'Website Contact Form: ' . $name; // Include the user's name in the subject
    $mail->Body    = "<b>From:</b> {$name} <br> <b>Email:</b> {$email} <br> <b>Phone Number:</b> {$phone} <br> <br> <b>Message:</b> <br> {$message}"; // Include the user's input in the email body

    $mail->send();
    http_response_code(200);
    echo 'Message has been sent.';
} catch (Exception $e) {
    http_response_code(500);
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
