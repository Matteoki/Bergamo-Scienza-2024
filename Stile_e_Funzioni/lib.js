var risposte_medie = ["200", "137", "Qual", "Vero", "Radio", "1901", "Windows", "CPU", "RAM", "Azoto", "Ossidazione"];
var risposte_superiori = ["1/7", "x<9", "nessun A è C", "8 giorni", "35", "Tra Inghilterra e Canada", "11101010010", "BIOS", "63 anni", "Potassio", "9,81"];
var max_domande = 11;

function controlla(nPage, scuola) {
  var risposta = document.getElementById("risposta").value;
	var risposte = [];
	switch(scuola) {
		case "medie":
			risposte = risposte_medie;
			break;

		case "superiori":
			risposte = risposte_superiori;
			break;
	}
	if(risposta == risposte[nPage - 2]) {
		alert("Risposta corretta!");
    if (nPage > max_domande)
      location.href = "finale.php";
    else
		  location.href = scuola + "_" + nPage + ".php";
	} else {
		alert("Risposta sbagliata!");
		document.getElementById("risposta").value = "";
	}
}
