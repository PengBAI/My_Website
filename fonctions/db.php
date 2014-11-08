<?php
	function connect_db() {
		$link = mysql_connect('mysql1.alwaysdata.com', 'pengbai', 'Bpmd06d27k');
		if (!$link) {
			echo "error";
		   die('Impossible de se connecter : ' . mysql_error());
		}
		$db_selected = mysql_select_db('pengbai_bd', $link);
		if (!$db_selected) {
			echo "error2";
		   die ('Impossible de sélectionner la base de données : ' . mysql_error());
		}		
	}
	function disconnect_db() {
		mysql_close();
	}
	
function insert_contact($prenom, $nom, $mail, $objet, $message) {
	connect_db();
	mysql_query("INSERT INTO contact(`prenom_contact`,`nom_contact`,`mail_contact`,`objet_contact`,`message_contact`) VALUES( '$prenom', '$nom', '$mail', ' $objet', '$message')");
	echo 'INSTERTED';
}
	
?>