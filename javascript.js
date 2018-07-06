AFRAME.registerComponent('event-animate', { // A-Frame Component zur Animation auf 'click'
    schema: {
        target: {type: 'selector'}, //mehrere Targets um mehrere Animationen mit einem 'click' auszulösen
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        target4: {type: 'selector'},
        target5: {type: 'selector'},
        target6: {type: 'selector'},
        aevent: {default: 'animation1'}, // verlinkung als 'begin' in einer Animation
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data= this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
            data.target4.emit(data.aevent);
            data.target5.emit(data.aevent);
            data.target6.emit(data.aevent);
        });
    }
});


var tick = 0;

//Animationen nicht über 'click', sondern über 'look' auslösen
// Funktion funktioniert, jedoch hängt sich A-Frame auf bei zu vielen Animationen und Objekten in einer Datei
AFRAME.registerComponent('look-animate', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        aevent: {default: 'animation1'}
    },

    init: function() {
        console.log('starting component look-animate..');

        var data= this.data;
        var on = 0;


        this.el.addEventListener('mouseenter', function () { //wenn cursor auf dem Objekt
            on = 1;
            setInterval(function () {
                if(on ===1 ) tick++;
                console.log('Tick: ' + tick);
            }, 1000); // Animation wird nach n (hier 1 Sekunde) Sekunden ausgelöst
        });

        this.el.addEventListener('mouseleave', function () { // Wenn cursor nicht mehr auf dem Objekt ist, wird tick zurückgesetzt
            on = 0;
            tick = 0;
            console.log('Tick: ' + tick);
        });
    },
    tick: function() {
        var data= this.data;
        if(tick>=4) {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
        }
    }
});

