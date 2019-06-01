var myapp = new Vue({
    el : "#our-app",
    data: {
        x : 0,
        y : 0
    },
    methods:{
        dimention : function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
        },
        overfunction : function(){
            alert("mouse is on the button");
        },
        outfunction : function(){
            alert("mouse is out");
        }
    }
});
