<?php

// Reading from the db_structure file.
$file_path = dirname(__FILE__).'/db_structure.txt'; // generating absolute file path

$fp = fopen($file_path, 'r'); // Opening the .txt file.

$table_number = fgets($fp); // Getting the total number of tables.

for($i = 1; $i <= $table_number; $i++){
	
	$table_name = fgets($fp); // taking the table name.
	$colums = fgets($fp); // Getting the specified column for that table.
	
	// Loop for taking the column name input.
	$sql = 'CREATE TABLE '.$table_name.' ( ';
	
	for($j = 1; $j <= $colums; $j++){
	
		$colum_text = fgets($fp);
		if($j < $colums) 
			$sql .= $colum_text.', ';
		else $sql .= $colum_text;
	
	}
	
	$sql .= ' ) ;';
	
	echo $sql.'<br/>';
	
	$con = mysql_connect(HOST, USERNAME, PASSWORD) or die("Can't connect to the database.<br/>");
	mysql_select_db(DATABASE) or die("Can't select the database.<br/>");
	
	$result = mysql_query($sql);
	
}

fclose($fp); // closing the text file.

?>
