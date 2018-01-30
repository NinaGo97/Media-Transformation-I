AFRAME.registerComponent('event-animate', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        target4: {type: 'selector'},
        target5: {type: 'selector'},
        aevent: {default: 'animation1'},
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
        });
    }
});


var tick = 0;

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
        if(tick>=4) {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
        }
    }
});

var ticktwo = 0;

AFRAME.registerComponent('look-animate-two', {
    schema: {
        target: {type: 'selector'},
        target2: {type: 'selector'},
        target3: {type: 'selector'},
        aevent: {default: 'animation1'}
    },

    init: function() {
        console.log('starting component look-animate-two..');

        var data= this.data;
        var ontwo = 0;


        this.el.addEventListener('mouseenter', function () {
            ontwo = 1;
            setInterval(function () {
                if(ontwo ===1 ) ticktwo++;
                console.log('Tick: ' + ticktwo);
            }, 1000);
        });

        this.el.addEventListener('mouseleave', function () {
            ontwo = 0;
            ticktwo = 0;
            console.log('Tick: ' + ticktwo);
        });
    },
    tick: function() {
        var data= this.data;
        if(ticktwo>=4) {
            data.target.emit(data.aevent);
            data.target2.emit(data.aevent);
            data.target3.emit(data.aevent);
        }
    }
});


