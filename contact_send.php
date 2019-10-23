<?php
	header('Content-type: application/json');
	$status=array(
		'type'=>'success',
		'message'=>'Email was Successfully Sent!'
        http_redirect("investo/conatct.php");
	);
    $name=@trim(stripslashes($_POST['name'])); 
    $email=@trim(stripslashes($_POST['email'])); 
    $phone=@trim(stripslashes($_POST['phone'])); 
    $business_type=@trim(stripslashes($_POST['business_type'])); 
    $message=@trim(stripslashes($_POST['message'])); 
    $email_from=$email;
    $email_to='ewafula@jiranismart.com';
    $body='Name: '.$name."\n\n".'Email: '.$email."\n\n".'Telephone: '.$phone."\n\n". 'Business Type: ' .$business_type. "\n\n".'Message: '.$message;
    mail($email_to, 'Contact form', $body, 'From: <'.$email_from.'>');
    echo json_encode($status);
    die;
?>