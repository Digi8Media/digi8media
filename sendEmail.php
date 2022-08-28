<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['full_name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $full_name = $_POST['full_name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'digi8.media123@gmail.com';
        $mail->Password = 'xnvdmgnslfiiuxuw';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587; 
        $mail->addReplyTo($email); 
        $mail->setFrom($email); 
        $mail->addAddress('hello@digi8media.net');
        $mail->Subject = 'Digi8Media Inquiry';
        $mail->Body    = $message;
        if ($mail->send()) {
            $status = "success";
            $response = "Email is sent!";
        } else {
            $status = "failed";
            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }

        exit(json_encode(array("status" => $status, "response" => $response)));
    }
?>
