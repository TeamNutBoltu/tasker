<?php

/*
 * 
 * folder name
 * file name
 * parameters .... 
 * 
 * */

$url = explode('/', key($_GET));

$file_location = '';

if(!empty($url[0])) $file_location .= $url[0].'/';
if(!empty($url[1])) $file_location .= $url[1].'.php';

//echo $file_location;
require_once($file_location);

?>
