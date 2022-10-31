<?php

require_once '../vendor/autoload.php';
require_once '../app/routes/api.php';
require_once '../app/helpers/helpers.php';

use Pecee\SimpleRouter\SimpleRouter;

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__, 1));
$dotenv->load();

if ($_ENV['DEBUG'] === 'true') {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL & ~E_DEPRECATED);
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

SimpleRouter::setDefaultNamespace('\app\controllers');

// Start the routing
SimpleRouter::start();
