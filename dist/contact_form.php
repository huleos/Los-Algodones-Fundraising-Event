<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$myemail = 'creativo@686studio.com';//<-----Put Your email address here.
$bccmail = '$email_address';//<-----Put Your BCC email address here.

$name = $_POST['elName']; 
$email_address = $_POST['elEmail'];
$phone = $_POST['elPhone'];
$message = $_POST['elMessage'];
$fieldHidden = isset($_POST['elAddress']) ? $_POST['elAddress'] : null;

if($name && $email_address && $message)
{
	$to = $myemail; 
	$email_subject = "$name contacted from algodonesfoundation.com";
	$email_body = "You have received a new message of Los Algodones Foundation".
	" Here are the details:\n
	Name: $name \n
	Email: $email_address \n
	Phone: $phone \n
	Message: \n $message"; 
	
	$headers = "From: $email_address\n"; /*Campo del Email del cliente*/
	$headers .= "Reply-To: $email_address\n"; /*Campo del Email de respuesta*/
	$headers .= "Bcc: " . $bccmail; /*Campo del Email de copia oculta*/
	if(!$fieldHidden)
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.html');
} 
?>