<?php
$dotaz = "SELECT * FROM hraci";
$vysledek = mysql_query($dotaz) or die(mysql_error($db));
$hrac = mysql_fetch_array($vysledek);
$vlastnictvi = explode(';', $hrac['polozky']);

if ($_GET['buy'] != '')
{
	$vlastnictvi[$_GET['buy'] - 1]++;
	$dotaz = 'UPDATE hraci SET polozky="'.join(';', $vlastnictvi).'" WHERE jmeno="'.$_SESSION['hrac'].'"';
	mysql_query($dotaz);
}
if ($_GET['sell'] != '')
{
	$vlastnictvi[$_GET['sell'] - 1]--;
	$dotaz = 'UPDATE hraci SET polozky="'.join(';', $vlastnictvi).'" WHERE jmeno="'.$_SESSION['hrac'].'"';
	mysql_query($dotaz);
}

echo $hrac['penize'];
?>

<table border="1">
<tr><td>Název</td><td>Cena</td><td>Množství</td><td>Koupit</td><td>Prodat</td></tr>
<?php
$dotaz = "SELECT * FROM polozky";
$vysledek = mysql_query($dotaz) or die(mysql_error($db));
while ($zaznam = mysql_fetch_array($vysledek))
{
	echo '<tr><td>'.$zaznam['nazev'].'</td>';
	echo '<td>'.$zaznam['cena'].'</td><td>';
	echo $vlastnictvi[$zaznam['id'] - 1];
	echo '</td><td>';
	if ($zaznam['cena'] <= $hrac['penize'])
		echo '<a href="index.php?buy='.$zaznam['id'].'">Koupit</a>';
	echo "</td><td>";
	if ($vlastnictvi[$zaznam['id'] - 1] > 0)
		echo '<a href="index.php?sell='.$zaznam['id'].'">Prodat</a>';
	echo "</td></tr>";
}
?>
</table>
