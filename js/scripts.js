function toggleTable(n){
	console.log('toggleTable na '+n);
	$("#nabidky>div").hide();
	$("#nabidky #"+n+"container").show();
	aktualniTab=n;
	$("#trzistetabs>li").removeClass('active');
	$("#"+aktualniTab+"tab").addClass('active');
}
function reloadInv()                //obnoveni tabulky vlastnictvi
{
	$.ajax({
		url : "components/inventar.php", //vykona se to co je v url
		success : function (data) {  //prijdou zpatky nejake data
			$("#inventar").html(data);  //data se hodi do neceho s id vlastnictvi, easy
			console.log('reloadInv');
		}
	});
}
function reloadNabidky()
{
	$.ajax({
		url : "components/nabidky.php",
		success : function (data) {
			$("#nabidky").html(data);
			toggleTable(aktualniTab);
			fixTrziste();
			console.log('reloadNabidky');
		}
	});
}
function reloadVyroba(){
	reloadInv();
	$.ajax({
		url : "components/seznamvyrob.php",
		success : function (data) {
			$("#seznamvyrob").html(data);
			console.log('reloadVyroba');
		}
	});
}
function reloadTimer(){
	var aktualniCas;
	$('.casvyroby').each(function(){
		aktualniCas = $(this).html();
		if (aktualniCas > 0){
			$(this).html(parseInt(aktualniCas)-1);
		} else {
			reloadVyroba();
		}
	});
}
function obchodovanie(idnab){
	$.get( "trh.php", { trade: idnab } ).done(reloadEverything());  //pri kliknuti na cudlik koupit nebo prodat se posle get request na index.php s parametry trade=idnab, potom se reloadne interface
}
function cancel(idnab){
	$.get( "trh.php", { cancel: idnab } ).done(reloadEverything()); //to same jen cudlik Zrušiť
}
function craft(idreceptu){
	$.get( "components/craft.php", { craft: idreceptu } ).done(reloadVyroba()); //TODO tlacitko by melo refreshovat i inventar na crafting.php
}
function reloadEverything(){ 
	reloadNabidky();
	reloadInv();
	$('.modal-backdrop.fade.in').hide();
	console.log('reloadEverything');
}
function fixTrziste(){
	$('#main').DataTable(); //todo Preklad
	$('.oteviranikoupeni').click(function(){
		var aktualniID = $(this).data('idnab');
		console.log('ID tohoto trade je '+aktualniID);
		$('.potvrzenikoupeni').click(function(){
			obchodovanie(aktualniID);
		});
	});
	$('.oteviranizruseni').click(function(){
		var aktualniID = $(this).data('idnab');
		console.log('ID tohoto trade je '+aktualniID);
		$('.potvrzenizruseni').click(function(){
			cancel(aktualniID);
		});
	});
	$('[data-toggle="tooltip"]').tooltip();
	console.log('fixTrziste');
}
