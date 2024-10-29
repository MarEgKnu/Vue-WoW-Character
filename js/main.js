const app = Vue.createApp({

    data() {

        return {
            characters: [
                {
                    name: "Unknown",
                    level: 0,
                    stamina: 0,
                    strength: 0,
                    intellect: 0,
                    spirit: 0,
                    agility: 0,
                }
            ]
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






