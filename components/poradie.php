<div class="col-xs-12 col-md-12">
	<div class="panel panel-primary">
		<div class="panel-heading" data-toggle="collapse" href="#inv" style="cursor: pointer">
				<h1 class="panel-title">Inventár</h1>
		</div>
		<div class="panel-body panel-collapse collapse in">
			<ol id="poradie">
<?php
	$dotaz = 'SELECT jmeno,body FROM hraci';
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	while ($zaznam = mysql_fetch_array($vysledek)){
		echo'<li><span class="poradie">'.$zaznam['body'].'</span>'.$zaznam['jmeno'].'</li>';
	}
?>
			</ol>
		</div>
	</div>
</div>