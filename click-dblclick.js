var myapp = new Vue({
    el : "#our-app",
    data:{
        i : 1
    },
    methods:{
        inc: function(increase){
            this.i += increase;
        },
        dec: function(decrement){
            this.i -= decrement;
        }
    }
});
