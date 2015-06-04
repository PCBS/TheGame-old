$(function() { //odeslani formulare s nabidkou
	$('#kuponyform').submit(function() {
		$.ajax({
			data: $(this).serialize(), //odesle se to co je vybrane jako klasicka get metoda, vybrane hodnoty se prevedou na tentyz string, jako kdyby to byl normalni submit
			type: "GET",
			url: "components/redeem.php",
			success: function(data) {
				reloadFullInv(); //po odeslani se nacte interface
				swal(data);
			}
		});
		return false;  //zastavi normalni submit, tj. zadny refresh
	});
	$(".grid-item").click(function(){ //nefunguje, ani to nevi ze se klika, nutno asi prepsat pomoci nejake posrane isotope metoddy
	    var idveci = $(this).attr("data-idveci");
	    console.log('Id veci je '+idveci);
	    $.ajax({
			data: {item:idveci},
			type: "GET",
			url: "components/iteminfo.php",
			success: function(data) {
				$("#infoitemu").html(data);
			}
		});
	});
});
$(reloadFullInv());