var aktualniTab = 'main';
function toggleTable(n){ //prepinani mezi Vse a Moje nabidky
	aktualniTab=n; //v trh.js puvodne 'main'
	console.log('toggleTable na '+aktualniTab);
	$("#nabidky>div").hide(); //schovani vsech divu
	$("#nabidky #"+aktualniTab+"container").show(); //ukaze se ten, ktery ma v nazvu parametr
	$("#trzistetabs>li").removeClass('active'); //spravny aktivni tab v navbaru
	$("#"+aktualniTab+"tab").addClass('active');
}
function obchodovanie(idnab){//pri kliknuti na cudlik koupit nebo prodat se posle get request na index.php s parametry trade=idnab, potom se reloadne interface
	$.ajax({
		url : "trade.php",
		type : "GET",
		data : {trade:idnab},
		success : function (data) {
			reloadTrh();
			if (data!==''){
				swal(data);
			}
		}
	});
}
function cancel(idnab){//to same jen cudlik Zrušiť
	$.ajax({
		url : "trade.php",
		type : "GET",
		data : {cancel:idnab},
		success : function (data) {
			reloadTrh();
			if (data!==''){
				swal(data);
			}
		}
	});
}
function reloadNabidky(){ //reload nabidek v trhu
	$.ajax({
		url : "components/nabidky.php",
		success : function (data) {
			$("#nabidky").html(data); //da se to do id nabidky
			toggleTable(aktualniTab); //prepne se na spravny tab
			trziste();                //opravi se celkove trziste (datatables,tooltipy,sweetalerts)
			console.log('reloadNabidky');
		}
	});
}
function reloadTrh(){
	reloadInv();
	reloadNabidky();
	console.log('reloadTrh');
}
function trziste(){
	$('[data-toggle="tooltip"]').tooltip();
	$('.oteviranikoupeni').click(function(){ //sweetalerts
		var aktualniID = $(this).data('idnab');
		console.log('ID tohoto trade je '+aktualniID);
		swal({
			title: "Jsi si jistý?",
			text: "Pokračováním koupíš tuto nabídku! ("+aktualniID+")",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			cancelButtonText: "Ne, zavřít",
			confirmButtonText: "Ano, chci koupit nabídku",
			closeOnConfirm: true
		},
		function(){
			obchodovanie(aktualniID);
		});
	});
	$('.oteviranizruseni').click(function(){
		var aktualniID = $(this).data('idnab');
		console.log('ID tohoto trade je '+aktualniID);
		swal({
			title: "Jsi si jistý?",
			text: "Pokračováním bude tvoje nabídka zrušena! ("+aktualniID+")",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			cancelButtonText: "Ne, zavřít",
			confirmButtonText: "Ano, chci zrušit nabídku",
			closeOnConfirm: true
		},
		function(){
			cancel(aktualniID);
		});
	});
	$('#main').DataTable(); //todo Preklad
	$('#moje').DataTable(); //todo pagination pri reloadu
	console.log('trziste');
}
$(function() { //odeslani formulare s nabidkou
	$('#nabidka').submit(function() {
		$.ajax({
			data: $(this).serialize(), //odesle se to co je vybrane jako klasicka get metoda, vybrane hodnoty se prevedou na tentyz string, jako kdyby to byl normalni submit
			type: "GET",
			url: "trade.php",
			success: function(data) {
				reloadTrh(); //po odeslani se nacte interface
				if (data!==''){
					swal(data);
				}
			}
		});
		return false;  //zastavi normalni submit, tj. zadny refresh
	});
});
$(reloadTrh()); //po nacteni stranky se nacte interface, easy
