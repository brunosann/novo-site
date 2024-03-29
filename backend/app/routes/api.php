<?php

use Pecee\SimpleRouter\SimpleRouter as Route;
use Pecee\Http\Request;
use app\controllers\ContactController;

Route::post('/contact', [ContactController::class, 'store']);

Route::get('/not-found', function () {
  response()->httpCode(404)->json(['message' => 'page not found']);
});

Route::error(function (Request $request, \Exception $exception) {
  switch ($exception->getCode()) {
    case 404:
      response()->redirect('/not-found');
  }
});
