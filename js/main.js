const app = Vue.createApp({

    data() {

        return {
            characters: [
                {
                    name: "Unknown",
                    class: "Unknown",
                    level: 1,
                    stamina: 1,
                    strength: 1,
                    intellect: 1,
                    spirit: 1,
                    agility: 1,
                    critRating: 0,
                    totalHealth: 1,

                },
            ],
            characterInput: {
                name: "Unknown",
                class: "Druid",
                level: 80,
                stamina: 1,
                strength: 1,
                intellect: 1,
                spirit: 1,
                agility: 1,
                critRating: 0,
                

            },
            maxLevel: 80,
            minLevel: 1,
            classes: {
                "Warrior": {
                    baseHealth: 8121,
                    baseMana: NaN,
                },
                "Warlock": {
                    baseHealth: 7164,
                    baseMana: 3856,
                },
                "Druid": {
                    baseHealth: 7417,
                    baseMana: 3496,
                },
                "Hunter": {
                    baseHealth: 7324,
                    baseMana: 5046,
                },
                "Mage": {
                    baseHealth: 6963,
                    baseMana: 3268,
                },
                "Paladin": {
                    baseHealth: 6934,
                    baseMana: 4394,
                },
                "Priest": {
                    baseHealth: 6960,
                    baseMana: 3863,
                },
                "Rogue": {
                    baseHealth: 7604,
                    baseMana: NaN,
                },
                "Shaman": {
                    baseHealth: 1,
                    baseMana: 4396,
                },
                "DeathKnight": {
                    baseHealth: 8121,
                    baseMana: NaN,
                },

            },
            nextId: 1,
                
            

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
                    totalHealth: this.calculateTotalHealth(this.characterInput)
                })
            }
            
        },
        calculateTotalHealth(character) {
            return this.classes[character.class].baseHealth + (character.stamina * 10)
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
            else if (!Number.isInteger(this.characterInput.intellect) || this.characterInput.intellect < 1) {
                window.alert("Invalid intellect value")
                return false
            }
            else if (!Number.isInteger(this.characterInput.spirit) || this.characterInput.spirit < 1) {
                window.alert("Invalid spirit value")
                return false
            }
            else if (!Number.isInteger(this.characterInput.agility) || this.characterInput.agility < 1) {
                window.alert("Invalid agility value")
                return false
            }
            else if (!Number.isInteger(this.characterInput.critRating) || this.characterInput.critRating < 0) {
                window.alert("Invalid agility value")
                return false
            }
            return true
        }
        
    
    },
    computed: {
        nextFreeId() {
            this.nextId = this.nextId + 1;
            return nextId
        },
        
    }

})






