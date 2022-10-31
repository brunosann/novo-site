<?php

namespace app\controllers;

use app\models\Contact;

class ContactController
{
  public function store()
  {
    $contactModel =  new Contact;
    $contact = $contactModel->insert(input()->all());
    response()->json($contact);
  }
}
