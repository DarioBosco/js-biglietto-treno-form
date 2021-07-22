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

document.getElementById('generateTicketButton').addEventListener('click', function createTicket() {
	var customerName = document.getElementById('customerName').value;
	var reservationCode = Math.floor(Math.random() * 10000 + 90000);
	var carriageNumber = Math.floor(Math.random() * 10) + 1;
	var travelCost = document.getElementById('travelDistance').value * 0.21;
	var customerAge = document.getElementById('age').value;

	var rate = '';
	if (customerAge == 'underage') {
		rate = 'Sconto Minorenne';
		populateTicket();
	} else if (customerAge == 'adult') {
		rate = 'Tariffa Adulto';
		populateTicket();
	} else if (customerAge == 'over65') {
		rate = 'Sconto Over&#160;65';
		populateTicket();
	}

	function populateTicket() {
		document.getElementById('ticketName').innerHTML = customerName;
		document.getElementById('ticketReservationCode').innerHTML = reservationCode;
		document.getElementById('ticketCarriage').innerHTML = carriageNumber;
		document.getElementById('ticketCost').innerHTML = travelCost.toFixed(2) + '&euro;';
		document.getElementById('ticketRate').innerHTML = rate;
	}

	console.log(customerAge);

	if (customerAge != 'underage' || customerAge != 'adult' || customerAge != 'over65') {
		alert('Inserisci i dati mancanti');
		document.getElementById('ticketName').innerHTML = ' ';
		document.getElementById('ticketReservationCode').innerHTML = ' ';
		document.getElementById('ticketCarriage').innerHTML = ' ';
		document.getElementById('ticketCost').innerHTML = ' ';
		document.getElementById('ticketRate').innerHTML = ' ';
	}

	var element = document.getElementById('container-biglietto');
	element.classList.remove('d-none');
});

document.getElementById('resetButton').addEventListener('click', function () {
	document.getElementById('customerName').value = ' ';
	document.getElementById('travelDistance').value = ' ';
	document.getElementById('age').value = ' ';

	var element = document.getElementById('container-biglietto');
	element.classList.add('d-none');
});
