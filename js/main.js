const app = Vue.createApp({

    data() {

        return {
            characters: [

            ],
            characterInput: {
                name: "Unknown",
                class: "Unknown",
                level: 0,
                stamina: 0,
                strength: 0,
                intellect: 0,
                spirit: 0,
                agility: 0,
            },
            maxLevel: 80,
            minLevel: 1,
            classes: [

            ]

        }

    },

    methods: {
        characterSummary(character) {
            return character.name + ": " + "Level " + character.level + " " + character.class
        },
        addCharacter() {
            if (this.validateCharacterInput()) {
                this.characters.push( {
                    name: this.characterInput.name,
                    class: this.characterInput.class,
                    level: this.characterInput.level,
                    stamina: this.characterInput.stamina,
                    strength: this.characterInput.strength,
                    intellect: this.characterInput.intellect,
                    spirit: this.characterInput.spirit,
                    agility: this.characterInput.agility,
                })
            }
            
        },
        validateCharacterInput() {
            if (!Number.isInteger(this.characterInput.level) || this.characterInput.level > this.maxLevel || this.characterInput.level < this.minLevel) {
                window.alert("Invalid level value")
                return false
            }
            else if (!Number.isInteger(this.characterInput.stamina) || this.characterInput.stamina < 1) {
                window.alert("Invalid stamina value")
                return false
            }
            else if (!Number.isInteger(this.characterInput.strength) || this.characterInput.strength < 1) {
                window.alert("Invalid strength value")
                return false
            }
            return true
        }
        
    
    },
    computed: {
        myComputed() {
            return "wassup?"
        },
        
    }

})






