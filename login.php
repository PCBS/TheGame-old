<?php
/*echo "session je:".$_SESSION['hrac']."<br>";
if ($_POST['hrac'] != '')
{
	$dotaz = 'SELECT * FROM hraci WHERE jmeno="'.$_POST['hrac'].'"';
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	echo "test";
	if ($zaznam = mysql_fetch_array($vysledek)
		echo $zaznam;
		if ($zaznam['heslo'] == $_POST['heslo'])
			$_SESSION['hrac'] = 'jirvoz';
}*/
if ($_POST['hrac'] != "jirvoz")
	include "form.php";
?>
