<?php

namespace app\models;

use app\db\Connection;

class Model
{
  public $pdo;

  function __construct()
  {
    $this->pdo =  (new Connection)->run();
  }
}
