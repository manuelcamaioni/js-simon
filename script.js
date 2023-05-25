// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?
 // timestamp return
 // timestamp return



const clock = setInterval(function(){
const countDownGoal = new Date('May 26, 2023 09:30:00').getTime();     
const realTime = new Date().getTime();   
const timeFrame = countDownGoal - realTime;
const milliseconds = timeFrame * 1000; 
const seconds = Math.floor((milliseconds / 1000) % 60);
const minutes = (seconds / 60) % 60;
const hours = Math.floor((minutes / 60) % 24) ;
const days = Math.floor((hours / 24) % 24);

const countDownElement = document.getElementById('countdown');

countDownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
clearInterval();
}, 1000)
