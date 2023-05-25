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
    let timeFrame = countDownGoal - realTime;

    const CDoperation = convertMsToTime(timeFrame, clock);

    const countDownElement = document.getElementById('countdown');

    countDownElement.innerHTML = `<span>${CDoperation}</span>`;
    }, 998);
    
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    function convertMsToTime(ms, interval){
        let sec = Math.floor(ms / 1000);
        let min = Math.floor(sec / 60);
        let hrs = Math.floor(min / 60);
        let d = Math.floor(hrs / 24);
        sec = sec % 60;
        min = min % 60;
        hrs = hrs % 24;
        d = d % 24;

        if(ms <= 300){
            clearInterval(interval);
        }
        return `${padTo2Digits(d)}:${padTo2Digits(hrs)}:${padTo2Digits(min)}:${padTo2Digits(sec)}`;
    }
    