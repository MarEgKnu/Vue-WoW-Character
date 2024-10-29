const app = Vue.createApp({

    data() {

        return {
            intro: "Welcome to my vue template"
        }

    },

    methods: {
        myMethod() {

        },
    
    },
    computed: {
        myComputed() {
            return "wassup?"
        },
        
    }

})