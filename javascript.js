AFRAME.registerComponent('event-animate', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        aevent: {default: 'animation1'},
        triggeraction: {default: 'click' }
    },

    init: function() {

        var data= this.data;

        this.el.addEventListener(data.triggeraction, function () {
            data.target.emit(data.aevent);
        });
    }
});

/*
var tick = 0;

AFRAME.registerComponent('look-animate', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        aevent: {default: 'animation1'}
    },

    init: function() {
        console.log('starting component look-animate..');

        var data= this.data;
        var on = 0;


        this.el.addEventListener('mouseenter', function () {
            on = 1;
            setInterval(function () {
                if(on ===1 ) tick++;
                console.log('Tick: ' + tick);
            }, 1000);
        });

        this.el.addEventListener('mouseleave', function () {
            on = 0;
            tick = 0;
            console.log('Tick: ' + tick);
        });
    },
    tick: function() {
        var data= this.data;
        if(tick>=6) {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
        }
    }
});
*/
