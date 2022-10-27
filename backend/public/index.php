<?php

require_once '../vendor/autoload.php';
require_once '../app/routes/api.php';
require_once '../app/helpers/helpers.php';

use Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::setDefaultNamespace('\app\controllers');

// Start the routing
SimpleRouter::start();
