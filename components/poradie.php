<div class="col-xs-12 col-md-12">
	<div class="panel panel-primary">
		<div class="panel-heading" data-toggle="collapse" href="#poradi" style="cursor: pointer">
				<h1 class="panel-title">Poradie</h1>
		</div>
		<div class="panel-body panel-collapse collapse in" id="poradi">
			<table id="poradie">
<?php
	$dotaz = 'SELECT jmeno,body FROM hraci';
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	while ($zaznam = mysql_fetch_array($vysledek)){
		echo'<tr data-body="'.$zaznam['body'].'"><td>'.$zaznam['body']."</td> <td>".$zaznam['jmeno'].'</td></tr>';
	}
?>
			</table>
		</div>
	</div>
</div>