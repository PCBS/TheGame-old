<?php
	session_start();
	include "../vlastnictvi.php";
	echo '<div class="panel panel-default"><div class="panel-heading"><h2 class="panel-title">Inventář:</h2></div><div class="panel-body"><a>Peniaze<span class="badge">'.$vlastnictvi[0].'</span></a>';//<table style="background-color: #fff" class="table table-bordered table-responsive table-hover"><tr><td>Peniaze</td><td>'.$vlastnictvi[0].'</td></tr>';
	$dotaz = 'SELECT * FROM veci';
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	while ($zaznam = mysql_fetch_array($vysledek)) {
		echo '<a>'.$zaznam['nazev'].'<span class="badge">'.$vlastnictvi[$zaznam['idveci']].'</span></a>'; //'<tr><td>'.$zaznam['nazev'].'</td><td>'.$vlastnictvi[$zaznam['idveci']].'</td></tr>';
	} //</table>
	echo '</div></div>';
?>
