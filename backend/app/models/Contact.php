<?php

namespace app\models;

class Contact extends Model
{
  protected $table = 'contacts';

  public function insert(array $data): array
  {
    $sql = $this->pdo->prepare("
      INSERT INTO {$this->table} (name, email, subject, message)
      VALUES (:name, :email, :subject, :message)
    ");
    $sql->bindValue(':name', $data['name']);
    $sql->bindValue(':email', $data['email']);
    $sql->bindValue(':subject', $data['subject']);
    $sql->bindValue(':message', $data['message']);
    $sql->execute();

    $data['id'] = $this->pdo->lastInsertId();

    return $data;
  }

  public function markAsSent(int $id)
  {
    $sql = $this->pdo->prepare("
      UPDATE {$this->table} SET sent_at = NOW() WHERE id = :id
    ");
    $sql->bindValue(':id', $id);
    return $sql->execute();
  }
}
