<?php

// Reading from the db_insert file.
$file_path = dirname(__FILE__).'/db_insert.txt'; // generating absolute file path

$fp = fopen($file_path, 'r'); // Opening the .txt file.

$table_number = fgets($fp); // Getting the total number of tables.

for($i = 1; $i <= $table_number; $i++){
	
	$table_name = fgets($fp); // taking the table name.
	$colums = fgets($fp); // Getting the specified column for that table.
	$inserts = fgets($fp); // How many insert operations are there.
	
	for($j = 1; $j <= $inserts; $j++){
		
		// Loop for taking the column name input.
		$sql = "INSERT INTO ".$table_name." VALUES ('', ";
		
		for($k = 1; $k < $colums; $k++){
			
			$colum_text = fgets($fp);
			if($k < $colums - 1)
				$sql .= "'".$colum_text."', ";
			else $sql .= "'".$colum_text."'";
			
		}
		
		$sql .= ' ) ;';
	
		echo $sql.'<br/>';
		
		$con = mysql_connect(HOST, USERNAME, PASSWORD) or die("Can't connect to the database.<br/>");
		mysql_select_db(DATABASE) or die("Can't select the database.<br/>");
		
		mysql_query($sql);
		
		mysql_close($con);
		
		//~ $colum_text = fgets($fp);
		//~ if($j < $colums) 
			//~ $sql .= $colum_text.', ';
		//~ else $sql .= $colum_text;
	
	}
	
}

fclose($fp); // closing the text file.

?>
 
