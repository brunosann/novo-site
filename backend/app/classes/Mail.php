<?php

namespace app\classes;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mail
{
  public PHPMailer $mail;

  function __construct()
  {
    $this->mail = new PHPMailer(true);

    $this->config();
  }

  public function config()
  {
    $this->mail->SMTPDebug = SMTP::DEBUG_OFF;
    $this->mail->isSMTP();
    $this->mail->Host = $_ENV['MAIL_HOST'];
    $this->mail->SMTPAuth = true;
    $this->mail->Username = $_ENV['MAIL_USERNAME'];
    $this->mail->Password = $_ENV['MAIL_PASSWORD'];
    $this->mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];
    $this->mail->Port = $_ENV['MAIL_PORT'];

    $this->mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
    $this->mail->addAddress($_ENV['MAIL_TO_ADDRESS'], $_ENV['MAIL_TO_NAME']); //Add a recipient

    $this->mail->isHTML(true);
    $this->mail->Subject = 'Dev Teixeira Contato';
  }

  public function body($content)
  {
    $this->mail->Body = $content;
  }

  public function send()
  {
    try {
      $this->mail->send();
    } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
    }
  }
}
