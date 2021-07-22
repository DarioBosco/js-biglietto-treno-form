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

/* Bottone GENERA */
document.getElementById('generateTicketButton').addEventListener('click', function () {
	/* Prezzo base del biglietto */
	var ticketPriceByKm = 0.21;

	/* Prendo i valori dal form */
	var customerName = document.getElementById('customerName').value;
	var travelDistance = parseInt(document.getElementById('travelDistance').value);
	var customerAge = document.getElementById('age').value;

	/* Numeri random per il numero della carrozza e del codice prenotazione */
	var reservationCode = Math.floor(Math.random() * 10000 + 90000);
	var carriageNumber = Math.floor(Math.random() * 10) + 1;

	/* Calcolo lo sconto del biglietto in base alla fascia di eta' del cliente e dichiaro "rate" per stampare sul biglietto la scontistica adeguata  */
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

	/* Calcolo il costo del biglietto e richiamo la funzione populateTicket */
	var travelCost = travelDistance * ticketPriceByKm * discount;
	populateTicket();

	/* Eseguo un controllo sui valori inseriti */
	if ((customerAge != 'underage' && customerAge != 'adult' && customerAge != 'over65') || customerName == '' || travelDistance == '' || isNaN(travelDistance)) {
		var element = document.getElementById('container-biglietto');
		element.classList.add('d-none');

		alert('Inserisci i dati mancanti o assicurati di aver inserito un numero nei KM da percorrere');
		document.getElementById('ticketName').innerHTML = ' ';
		document.getElementById('ticketReservationCode').innerHTML = ' ';
		document.getElementById('ticketCarriage').innerHTML = ' ';
		document.getElementById('ticketCost').innerHTML = ' ';
		document.getElementById('ticketRate').innerHTML = ' ';
	} else {
		var element = document.getElementById('container-biglietto');
		element.classList.remove('d-none');
	}

	/* Funzione per popolare il biglietto*/
	function populateTicket() {
		document.getElementById('ticketName').innerHTML = customerName;
		document.getElementById('ticketReservationCode').innerHTML = reservationCode;
		document.getElementById('ticketCarriage').innerHTML = carriageNumber;
		document.getElementById('ticketCost').innerHTML = travelCost.toFixed(2) + '&euro;';
		document.getElementById('ticketRate').innerHTML = rate;
	}
});

/* Bottone ANNULLA */
document.getElementById('resetButton').addEventListener('click', function () {
	document.getElementById('customerName').value = ' ';
	document.getElementById('travelDistance').value = ' ';
	document.getElementById('age').value = ' ';

	var element = document.getElementById('container-biglietto');
	element.classList.add('d-none');
});
