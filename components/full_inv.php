<?php
session_start();
include "../vlastnictvi.php";
include "updatevyrob.php";
?>
<div class="panel panel-primary">
	<div class="panel-heading" data-toggle="collapse" href="#inv" style="cursor: pointer">
		<h1 class="panel-title">Inventář</h1>
	</div>
	<div id="inv" class="panel-collapse collapse in" style="text-align: left">
		<div class="grid js-isotope" data-isotope-options='{ "itemSelector": ".item", "layoutMode": "fitRows" }'>
			<?php
			$dotaz = 'SELECT * FROM veci';
			$vysledek = mysql_query($dotaz) or die(mysql_error($db));
			while ($zaznam = mysql_fetch_array($vysledek)) {
				//if ($vlastnictvi[$zaznam['idveci']] > 0)
					echo '<div class="grid-item"><img id="item-sm" src="icons/'.$zaznam['nazev'].'.png"></img><span class="badge">'.$vlastnictvi[$zaznam['idveci']].'</span> '.$zaznam['nazev'].'</div>';
			}
			?>
		</div>
	</div>
</div>
