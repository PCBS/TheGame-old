<?php
//TODO odkomentovat pro ajax
//session_start();
//include '../vlastnictvi.php';
?>
<div class="col-xs-12 col-md-4">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h1 class="panel-title">Body</h1>
		</div>
		<div class="panel-body" style="width: 100%; heigth: 100%">
			<?php
			echo '<p>Výskumné body: '.number_format($hrac['vyzkum'], 0, '', ' ').'</p><p><strong>Výherné body:</strong> '.number_format($hrac['body'], 0, '', ' ').'</p>';
			?>
		</div>
	</div>
</div>
