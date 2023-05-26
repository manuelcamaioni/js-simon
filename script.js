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

 const clock = setInterval(function(){
    const countDownGoal = new Date('May 26, 2023 09:30:00').getTime(); // get the timestamp (ms) between the assigned date and Jan 1 1970
    const realTime = new Date().getTime(); // get timestamp of the current time
    
    let timeSpan = countDownGoal - realTime; //existing distance between the countDownGoal timestamp and the current timestamp
    if(realTime > countDownGoal){
        timeSpan = 0;
    }
    const displayCountDown = convertToTime(timeSpan, clock); // initialized a variable that contains the function 

    const countDownElement = document.getElementById('countdown');
    
    countDownElement.innerHTML = `<span>${displayCountDown}</span>`;
    }, 998);
    
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0'); // faccio in modo che il numero convertito in stringa abbioa sempre due caratteri quando il valore e' minore di 10
    }
    /**
     * The function invoked in the setInterval function, at every iteration keeps track and update
     * the converted variables(sec, min, hrs, and d) every 1000 ms
     * @param {number} ms //time span that intercourse between countDownGoal and realTime
     * @param {object} interval // variable that contains the setInterval function
     * @returns converted ms in seconds, minutes, hours, and days with 2 characters
     */
    function convertToTime(ms, interval){
        let sec = Math.floor(ms / 1000);
        let min = Math.floor(sec / 60);
        let hrs = Math.floor(min / 60);
        let d = Math.floor(hrs / 24);
        sec = sec % 60; // Updating sec with the remainder of 60 (x / 60 --> get the updated remainder at every interval)
        min = min % 60; // Since the real time always get closer to the countDownGoal, the timeSpan value is bound to reduce
        hrs = hrs % 24;
        d = d % 24;

        if(ms <= 300){ //exit condition to stop the setInterval
            clearInterval(interval); 
        }
        return `${padTo2Digits(d)}d ${padTo2Digits(hrs)}hrs ${padTo2Digits(min)}min ${padTo2Digits(sec)}s`;
    }
    