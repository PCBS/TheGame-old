<?php

require '../dblogin.php';

if (isset($_GET['id']))
{
	$dotaz = 'SELECT * FROM veci WHERE idveci='.$_GET['id'];
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	$zaznam = mysql_fetch_array($vysledek);
	if (count($zaznam) > 1)
	{
		echo '<div id="nazev">Název: '.$zaznam['nazev'].'</div>';
		if ($zaznam['typ'] == "")
			echo '<div id="typ">Typ: Surovina</div>';
		else
			echo '<div id="typ">Typ: '.strtoupper($zaznam['typ']).'</div>';
		if ($zaznam['socket'] != "")
			echo '<div id="typ">Třída: '.$zaznam['socket'].'</div>';
		if ($zaznam['vykon'] > 0)
			echo '<div id="vykon">Výkon: '.$zaznam['vykon'].'</div>';
		echo '<div id="popis">Popis: '.$zaznam['popis'].'</div>';
	}
	else
		echo 'Nepodařilo se získat info o tomto předmětu: '.$_GET['id'];
}
else
{
	echo 'Chybí id itemu.';
}
