var mb = cpu = ram = hdd = gpu = psu = "Nic";
var ramcounter = 0, hddcounter = 0, gpucounter = 0;
function initIsotope() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'packery',
    filter: function() {
      return qsRegex ? $(this).text().match(qsRegex) : true;
    },
    getSortData: {
      name: '.name',
      power: '.power parseInt',
      count: '.count parseInt',
      tier: '[data-tier]',
      type: '[data-type]',
    },
    sortAscending: {
      name: true,
      power: false,
      count: false,
      tier: true,
      type: true
    }
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  $('.sort-by-button-group').on('click', 'a', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
      sortBy: sortByValue
    });
  });
  var qsRegex;
  // use value of search field to filter
  var $quicksearch = $('.quicksearch').keyup(debounce(function() {
    qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope({
      filter: function() {
        return qsRegex ? $(this).text().match(qsRegex) : true;
      },
    });
  }, 200));

  // debounce so filtering doesn't happen every millisecond
  function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
      if (timeout) {
        clearTimeout(timeout);
      }

      function delayed() {
        fn();
        timeout = null;
      }
      timeout = setTimeout(delayed, threshold || 100);
    };
  }
  console.log('initIsotope');
}
function itemInfo() {
	$(".grid-item").click(function() { 
		var idveci = $(this).attr("data-idveci");
		console.log('Id veci je ' + idveci);
		$.ajax({
			data: {
			id: idveci
		},
			type: "GET",
			url: "components/getinfo.php",
			success: function(data) {
				$("#infoitemu").html(data);
			}
		});
	});
}
function shouldReturnArray(x){
	switch(x){
		case "mb":
			return false;
		case "cpu":
			return false;
		case "ram":
			return true;
		case "hdd":
			return true;
		case "psu":
			return false;
		case "gpu":
			return true;
	}
}
function initForm(){
	itemInfo();
	$(".grid button").click(function(){
		var toto = $(this).closest("div");
		var typ = toto.data("type");
		console.log("typ "+typ);
		if (shouldReturnArray(typ) === true){
			window[typ+"counter"]++;
			window[typ+window[typ+"counter"]].idveci = toto.data("idveci");
			window[typ+window[typ+"counter"]].nazev = toto.find("abbr").attr("title");
			console.log(window[typ+window[typ+"counter"]]);
		}else{
			window[typ].idveci = toto.data("idveci");
			window[typ].nazev = toto.find("abbr").attr("title");
		}
		showCurrentBuild();
	});
}
function reloadSestavy() {
	$.ajax({
		url: "components/sestavy.php", //vykona se to co je v url
		success: function(data) { //prijdou zpatky nejake data
			$("#sestavy").html(data); //data se hodi do neceho s id inventar, easy
			console.log('reloadSestavy');
			$('.disass').click(function() {
				var idsestavy = $(this).data('idsestavy');
				disass(idsestavy);
				return false;
			});
			$('.switch').click(function() {
				var idsestavy = $(this).data('idsestavy');
				zmenit(idsestavy);
				return false;
			});
		}
	});
}
function reloadSkladaniSestav() {
	$.ajax({
		url: "components/full_inv2.php", //vykona se to co je v url
		success: function(data) { //prijdou zpatky nejake data
			$("#build").html(data); //data se hodi do neceho s id inventar, easy
      //	disableUnavailable();
			console.log('reloadSkladaniSestav');
			initIsotope();
      /*	$("select#mb").change(function(){
		        console.log('selectchange');
	    	    disableUnavailable();
	        });*/
			initForm();
		}
	});
}
function disass(idsestavy) {
	 console.log('ID sestavy, ktera se bude rusit, je ' + idsestavy); //TODO potvrzovaci tlacitko
	 $.ajax({
		url: "components/sestavit.php",
		type: "GET",
		data: {
			disass: idsestavy
		},
		success: function(data) {
			reloadSestavy();
			reloadSkladaniSestav();
			if (data !== '') {
				swal(data);
			}
		}
	});
}
function zmenit(idsestavy) {
	$.ajax({
		url: "components/sestavit.php",
		type: "GET",
		data: {
			switch: idsestavy
		},
		success: function(data) {
			reloadSestavy();
			if (data !== '') {
				swal(data);
			}
		}
	});
}
function disableRAM() {
	var pocetram = $("#build #mb option:selected").data('ram');
	console.log('RAM k dispozici ' + pocetram);
	$("select[id*=ram]").each(function() {
		$(this).prop("disabled", true);
	});
	for (i = 1; i <= pocetram; i++) {
		$("#ram" + i).prop("disabled", false);
	}
}

function disableHDD() {
	var pocethdd = $("#build #mb option:selected").data('hdd');
	console.log('HDD k dispozici ' + pocethdd);
	$("select[id*=hdd]").each(function() {
		$(this).prop("disabled", true);
	});
	for (i = 1; i <= pocethdd; i++) {
		$("#hdd" + i).prop("disabled", false);
	}
}

function disablePCI() {
	var pocetpci = $("#build #mb option:selected").data('pci');
	console.log('PCI k dispozici ' + pocetpci);
	$("select[id*=gpu]").each(function() {
		$(this).prop("disabled", true);
	});
	for (i = 1; i <= pocetpci; i++) {
		$("#gpu" + i).prop("disabled", false);
	}
}
/*
function disableUnavailable() {
	disableRAM();
	disableHDD();
	disablePCI();
	$("#build select").selectpicker('refresh');
}*/
function showCurrentBuild(){
	$("#currentbuild ul").each(function(){
		var x = $(this).attr("id");
		if (shouldReturnArray === true){
			//todo
			console.log("swag");
		}else{
			var htmlcontent = "<li>"+window[x].nazev;
			htmlcontent += '<button class="btn btn-xs btn-danger">Odobrať</button>';
			htmlcontent += '</li>';
			$(this).html(htmlcontent);
		}
	});
}
$(function() {
	reloadSestavy();
	reloadSkladaniSestav();
  /*	$('#build').submit(function() {
  		$.ajax({
  			data: $(this).serialize(), //odesle se to co je vybrane jako klasicka get metoda, vybrane hodnoty se prevedou na tentyz string, jako kdyby to byl normalni submit
  			type: "GET",
  			url: "components/sestavit.php",
  			success: function(data) {
  				var contains = data.indexOf('Složena sestava');
  				if (contains==-1){
  					swal(data);
  				} else {
  				//	location.reload();
  					reloadSestavy();
  					reloadSkladaniSestav();
  					//TODO MAGICKY SWEETALERT WOOO POSTAVILS KOMP WOOOOOOOOOOOOOOOOOO 420 BLAZE IT
  				}
  			}
  		});
  		return false;  //zastavi normalni submit, tj. zadny refresh
  	});*/
});
