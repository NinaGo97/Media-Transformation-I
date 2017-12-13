AFRAME.registerComponent('event-animate', {
    schema: {
        target: {type: 'selector'},
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