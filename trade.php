<?php
if (isset($_GET['trade']))
{
	//uskutečnit obchod
	$dotaz = 'SELECT * FROM obchod WHERE idnab='.$_GET['trade'];
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	$zaznam = mysql_fetch_array($vysledek);
	if (count($zaznam) > 1)
	{
		if ($zaznam['mnozchce'] <= $vlastnictvi[$zaznam['chce']])
		{
			//přidělení a odebrání surovin kupujícímu
			$vlastnictvi[$zaznam['nabizi']] += $zaznam['mnoznabizi'];
			$vlastnictvi[$zaznam['chce']] -= $zaznam['mnozchce'];
			$dotaz = 'UPDATE hraci SET vlastnictvi="'.join(';', $vlastnictvi).'" WHERE idhrace="'.$_SESSION['hrac'].'"';
			mysql_query($dotaz);
			
			//přidělení surovin prodávajícímu (autoru nabídky)
			$dotaz = 'SELECT * FROM hraci WHERE idhrace=' . $zaznam['hrac'];
			$vysledek = mysql_query($dotaz) or die(mysql_error($db));
			$autor = mysql_fetch_array($vysledek);
			$vlastautor = explode(';', $autor['vlastnictvi']);
			
			$vlastautor[$zaznam['chce']] += $zaznam['mnozchce'];
			$dotaz = 'UPDATE hraci SET vlastnictvi="'.join(';', $vlastautor).'" WHERE idhrace="'.$zaznam['hrac'].'"';
			mysql_query($dotaz);
			
			//odstranění nabídky
			$dotaz = 'DELETE FROM obchod WHERE idnab='.$_GET['trade'];
			mysql_query($dotaz);
			
			//log
			file_put_contents("log.txt", date()."Hráč ".$_SESSION['hrac']." koupil od hráče ".$zaznam['']." ".$zaznam['nabizi']."(".$zaznam['mnoznabizi']."x) za ".$zaznam['chce']."(".$zaznam['mnozchce']."x).\n", FILE_APPEND | LOCK_EX);
		}
		else
			echo "Nemáš dostatečné množství na uskutečnění obchodu.";
	}
	else
		echo "Nabídka už neexistuje.";
}
//vytvořit nabídku
else if (isset($_GET['mnoznabizi']))
{
	if ($vlastnictvi[$_GET['nabizi']] >= $_GET['mnoznabizi'])
	{
		$vlastnictvi[$_GET['nabizi']] -= $_GET['mnoznabizi'];
		$dotaz = 'INSERT INTO obchod (hrac, nabizi, mnoznabizi, chce, mnozchce) VALUES ('.$_SESSION['hrac'].', '.$_GET['nabizi'].', '.$_GET['mnoznabizi'].', '.$_GET['chce'].', '.$_GET['mnozchce'].')';
			mysql_query($dotaz);
			$dotaz = 'UPDATE hraci SET vlastnictvi="'.join(';', $vlastnictvi).'" WHERE idhrace="'.$_SESSION['hrac'].'"';
			mysql_query($dotaz);
	}
}
//zrušit nabídku
else if (isset($_GET['cancel']))
{
	$dotaz = 'SELECT * FROM obchod WHERE idnab='.$_GET['cancel'];
	$vysledek = mysql_query($dotaz) or die(mysql_error($db));
	$zaznam = mysql_fetch_array($vysledek);
	
	if ($zaznam['hrac'] == $_SESSION['hrac'])
	{
		$vlastnictvi[$zaznam['nabizi']] += $zaznam['mnoznabizi'];
		$dotaz = 'UPDATE hraci SET vlastnictvi="'.join(';', $vlastnictvi).'" WHERE idhrace="'.$zaznam['hrac'].'"';
		mysql_query($dotaz);
		
		$dotaz = 'DELETE FROM obchod WHERE idnab='.$_GET['cancel'];
		mysql_query($dotaz);
	}
	else
		echo "Zrušení se nepodařilo.";
}
?>
