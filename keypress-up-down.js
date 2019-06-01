var myapp = new Vue({
    el : "#our-app",
    methods:{
        keypressfunction: function(event){
            alert("you press.."+event.key);
        },
        keyupfunction:function(){
            alert("key up..");
        },
        keydownfunction: function(event){
            console.log(event);
        }
    }
});
