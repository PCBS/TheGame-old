<?php
	$prihlasen = false;
if ($_SESSION['hrac'] != '')
{
	$dotaz = 'SELECT * FROM hraci WHERE jmeno="'.$_SESSION['hrac'].'" AND heslo="'.$_SESSION['heslo'].'"';	//heslo se bude později hashovat
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	$zaznam = mysql_fetch_array($vysledek);
	
	if (count($zaznam))
		$prihlasen = true;
}
else if ($_POST['hrac'] != '')
{
	$dotaz = 'SELECT * FROM hraci WHERE jmeno="'.$_POST['hrac'].'" AND heslo="'.$_POST['heslo'].'"';
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	$zaznam = mysql_fetch_array($vysledek);
	
	if (count($zaznam) > 1)
	{
		$_SESSION['hrac'] = $zaznam['id'];
		$_SESSION['heslo'] = $zaznam['heslo'];
		$prihlasen = true;
	}
}
?>
