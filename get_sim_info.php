<?php
	
	$response = array('user' => json_decode($_POST['S']));
	
	//~ $response = array('title' => 'jamesbond');
	echo json_encode($response);
?>
