<div class="col-xs-12">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h1 class="panel-title">Strom výzkumu</h1>
		</div>
		<div class="panel-body">
		<?php
			include "vlastnictvi.php";
			include "updatesestav.php";
			$vyzkum = $hrac['vyzkum'];
			echo 'Máš '.$vyzkum.' research bodů.<hr>';

			$zkoumany = true;
			$dotaz = 'SELECT * FROM vyzkumy ORDER BY body';
			$vysledek = mysql_query($dotaz) or die(mysql_error($db));
			while ($zaznam = mysql_fetch_array($vysledek))
			{
				echo "<h5>".$zaznam['nazev']." (".$zaznam['body']." research bodů)</h5>";
				
				if ($vyzkum > $zaznam['body'])
					echo "Výzkum hotový.";
				if ($vyzkum < $zaznam['body'])
					if ($zkoumany)
					{
						echo 'Zbývá '.($zaznam['body'] - $vyzkum).' bodů<div class="progress"><div class="progress-bar" role="progressbar" style="width:'.(($vyzkum / $zaznam['body']) * 100).'%"></div></div>';
						$zkoumany = false;
					}
					else
						echo "Čeká se na předchozí výzkum."; //"Do vyzkoumání zbývá ".($zaznam['body'] - $vyzkum)." research bodů.";
				
				echo "<hr>";
			}
		?>
		<!--div class="progress">
  <div class="progress-bar" role="progressbar" style="width: <?php echo $vyzkum/10; ?>%;">
		<?php echo $vyzkum .' z 1000'; ?>
  </div>
	</div>
	Rozdeleni vykonu:</br>
	<script>
	$(function(){

$('#slider-range').noUiSlider({
	start: [ 50 ],
	range: {
		'min': [  0 ],
		'max': [ 100 ]
	}
});
});

</script>
		</div-->
	</div>
</div>
