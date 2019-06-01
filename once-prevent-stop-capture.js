var myapp = new Vue({
    el : "#our-app",
    data:{
        counter : 0,
    },
    methods:{
        inc :function(){
            this.counter++;
        },
        clicking:function(){
            alert(this.counter++);
        },
        parent:function(){
            alert("parent click");
        },
        child:function(){
            alert("child click");
        }
    }
});
