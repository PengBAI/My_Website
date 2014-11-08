<?php
	require('db.php');	
	connect_db();
	var_dump($_POST);
	insert_contact($_POST["prenom"], $_POST["nom"], $_POST["mail"], $_POST["objet"], $_POST["message"]);
	disconnect_db();
?>