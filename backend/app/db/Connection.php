<?php

namespace app\db;

use PDO;
use PDOException;

class Connection
{
  private $dbName;
  private $dbHost;
  private $dbUser;
  private $dbPass;

  function __construct()
  {
    $this->dbName = $_ENV['DB_NAME'];
    $this->dbHost = $_ENV['DB_HOST'];
    $this->dbUser = $_ENV['DB_USER'];
    $this->dbPass = $_ENV['DB_PASS'];
  }

  public function run()
  {
    $dns = sprintf('mysql:dbname=%s;host=%s', $this->dbName, $this->dbHost);

    try {
      $pdo = new PDO(
        $dns,
        $this->dbUser,
        $this->dbPass
      );

      return $pdo;
    } catch (PDOException $e) {
      echo "Erro: " . $e->getMessage();
    }
  }
}
