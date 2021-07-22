/*
TODO: 

Creiamo un finto biglietto del treno con:
//Nome passeggero
//Codice treno (numero casuale tra 90000 e 100000 escluso)
//Numero carrozza
//Prezzo calcolato
//Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

? BONUS: predisporre l'interfaccia grafica responsiva :faccia_leggermente_sorridente:
*/

document.getElementById('generateTicketButton').addEventListener('click', function () {
	var ticketPriceByKm = 0.21;

	var customerName = document.getElementById('customerName').value;
	var travelDistance = parseInt(document.getElementById('travelDistance').value);
	var customerAge = document.getElementById('age').value;

	var reservationCode = Math.floor(Math.random() * 10000 + 90000);
	var carriageNumber = Math.floor(Math.random() * 10) + 1;

	var rate = '';
	var discount = 1;
	if (customerAge == 'underage') {
		discount = 0.8;
		rate = 'Sconto Minorenne';
	} else if (customerAge == 'adult') {
		discount = 1;
		rate = 'Tariffa Adulto';
	} else if (customerAge == 'over65') {
		discount = 0.6;
		rate = 'Sconto Over&#160;65';
	}
	console.log(discount);
	var travelCost = travelDistance * ticketPriceByKm * discount;
	populateTicket();

	if ((customerAge != 'underage' && customerAge != 'adult' && customerAge != 'over65') || customerName == '' || travelDistance == '') {
		var element = document.getElementById('container-biglietto');
		element.classList.add('d-none');

		alert('Inserisci i dati mancanti');
		document.getElementById('ticketName').innerHTML = ' ';
		document.getElementById('ticketReservationCode').innerHTML = ' ';
		document.getElementById('ticketCarriage').innerHTML = ' ';
		document.getElementById('ticketCost').innerHTML = ' ';
		document.getElementById('ticketRate').innerHTML = ' ';
	} else {
		var element = document.getElementById('container-biglietto');
		element.classList.remove('d-none');
	}

	function populateTicket() {
		document.getElementById('ticketName').innerHTML = customerName;
		document.getElementById('ticketReservationCode').innerHTML = reservationCode;
		document.getElementById('ticketCarriage').innerHTML = carriageNumber;
		document.getElementById('ticketCost').innerHTML = travelCost.toFixed(2) + '&euro;';
		document.getElementById('ticketRate').innerHTML = rate;
	}
});

document.getElementById('resetButton').addEventListener('click', function () {
	document.getElementById('customerName').value = ' ';
	document.getElementById('travelDistance').value = ' ';
	document.getElementById('age').value = ' ';

	var element = document.getElementById('container-biglietto');
	element.classList.add('d-none');
});
