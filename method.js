var myvue = new Vue({
    el: "#our-app",
    data: {
        name: "vaibhav buccha",
        email: "jainvaibhav415@gmail.com"
    },
    // methods is also a predefined notation used for creating an method

    methods:{
        // run is the name of the method so we can use it using run.
        // run is function without parameter.
        run : function(){
            return "this method is running";
        },
        // welcome is the parameterised function.
        welcome : function(daytime){
            return "Good "+daytime;
        },
        // access value form data in methods.
        // for that we use this keyword which refers the Vue instance data property. this.name =>
        //  Vue/data/name
        valueaccess: function(){
            return "name : "+this.name+" | email : "+this.email;
        }
    }
})
