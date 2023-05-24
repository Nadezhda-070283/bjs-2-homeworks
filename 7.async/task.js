class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time ||!callback) {
            throw new Error ('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(clock => clock.time === time)){
            return console.warn('Уже присутствует звонок на это же время');
        }
        this. alarmCollection.push({time, callback, canCall:true});
    }

    removeClock(time) {
        const beginLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
        const endLength = this.alarmCollection.length;
        return beginLength > endLength;          
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5); 
    }

    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (alarm.time===this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall=false;
               return alarm.callback();
            }
        }
        if (this.intervalId) {
            return;}
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        
      stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

   resetAllCalls () {
       
    }
       
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}