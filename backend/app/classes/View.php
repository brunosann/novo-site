<?php

namespace app\classes;

class View
{
  private static function getContentView($view)
  {
    $file = __DIR__ . "/../views/{$view}.html";

    return file_exists($file) ? file_get_contents($file) : '';
  }

  public static function render($view, $vars = [])
  {
    $content = self::getContentView($view);

    $keys = array_keys($vars);
    $keys = array_map(fn ($item) => "{{{$item}}}", $keys);

    return str_replace($keys, array_values($vars), $content);
  }
}
