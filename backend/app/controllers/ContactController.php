<?php

namespace app\controllers;

use app\classes\Mail;
use app\classes\View;
use app\models\Contact;

class ContactController
{
  public function store()
  {
    $contactModel =  new Contact;
    $contact = $contactModel->insert(input()->all());

    try {
      $mail = new Mail;
      $mail->body(View::render('contact', $contact));
      $mail->send();

      $contactModel->markAsSent($contact['id']);
    } catch (\Throwable $th) {
      $contact['error'] = $th->getMessage();
    }

    response()->json($contact);
  }
}
