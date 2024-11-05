

const app = Vue.createApp({

    data() {

        return {
            characters: [
                {
                    name: "Unknown",
                    race: "Unknown",
                    class: "Unknown",
                    level: 1,
                    stamina: 1,
                    strength: 1,
                    intellect: 1,
                    spirit: 1,
                    agility: 1,
                    spellPower: 0,
                    critRating: 0,
                    totalHealth: 1,
                    totalMana: 0,

                },
            ],
            characterInput: {
                name: "Unknown",
                race: "NightElf",
                class: "Druid",
                level: 80,
                stamina: 1,
                strength: 1,
                intellect: 1,
                spirit: 1,
                agility: 1,
                spellPower:0 ,
                critRating: 0,
                

            },
            maxLevel: 80,
            minLevel: 1,
            races: {
                "Gnome": {
                    allowedClasses: (
                        ["DeathKnight", "Mage", "Rogue", "Warlock", "Warrior"]
                    )
                },
                "Human": {
                    allowedClasses: (
                        ["DeathKnight", "Mage", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"]
                    )
                },
                "NightElf": {
                    allowedClasses: (
                        ["DeathKnight", "Druid", "Hunter", "Priest", "Rogue", "Warrior"]
                    )
                },
                "Draenei": {
                    allowedClasses: new Set(
                        ["DeathKnight", "Hunter", "Mage", "Paladin", "Priest", "Shaman", "Warrior"]
                    )
                },
                "Orc": {
                    allowedClasses: (
                        ["DeathKnight", "Hunter", "Rogue", "Warlock", "Shaman", "Warrior"]
                    )
                },
                "Undead": {
                    allowedClasses: (
                        ["DeathKnight", "Mage", "Rogue", "Warlock", "Priest", "Warrior"]
                    )
                },
                "Tauren": {
                    allowedClasses: (
                        ["DeathKnight", "Druid", "Hunter", "Shaman", "Warrior"]
                    )
                },
                "Troll": {
                    allowedClasses: (
                       [ "DeathKnight", "Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior"]
                    )
                },
                "BloodElf": {
                    allowedClasses: (
                        ["DeathKnight", "Hunter", "Mage", "Paladin", "Priest", "Rogue", "Warlock"]
                    )
                }
            },
            classes: {
                "Warrior": {
                    baseHealth: 8121,
                    baseMana: NaN,
                    baseAgility: 189,
                    baseIntellect: 151,
                    baseStrength: 309,
                    baseStamina: 189,
                    baseSpirit: 144,
                },
                "Warlock": {
                    baseHealth: 7164,
                    baseMana: 3856,
                    baseAgility: 273,
                    baseIntellect: 221,
                    baseStrength: 117,
                    baseStamina:189,
                    baseSpirit: 245,
                },
                "Druid": {
                    baseHealth: 7417,
                    baseMana: 3496,
                    baseAgility: 273,
                    baseIntellect: 211,
                    baseStrength: 133,
                    baseStamina: 189,
                    baseSpirit: 166,
                },
                "Hunter": {
                    baseHealth: 7324,
                    baseMana: 5046,
                    baseAgility: 273,
                    baseIntellect: 181,
                    baseStrength: 188,
                    baseStamina:189,
                    baseSpirit: 151,
                },
                "Mage": {
                    baseHealth: 6963,
                    baseMana: 3268,
                    baseAgility: 189,
                    baseIntellect:221,
                    baseStrength: 138,
                    baseStamina: 189,
                    baseSpirit: 245,
                },
                "Paladin": {
                    baseHealth: 6934,
                    baseMana: 4394,
                    baseAgility: 97,
                    baseIntellect: 221,
                    baseStrength: 309,
                    baseStamina: 189,
                    baseSpirit: 166
                },
                "Priest": {
                    baseHealth: 6960,
                    baseMana: 3863,
                    baseAgility: 227,
                    baseIntellect: 221,
                    baseStrength: 179,
                    baseStamina: 189,
                    baseSpirit: 166,

                },
                "Rogue": {
                    baseHealth: 7604,
                    baseMana: NaN,
                    baseAgility: 273,
                    baseIntellect: 151,
                    baseStrength: 256,
                    baseStamina: 189,
                    baseSpirit: 113,

                },
                "Shaman": {
                    baseHealth: 1,
                    baseMana: 4396,
                    baseAgility: 273,
                    baseIntellect: 221,
                    baseStrength: 133,
                    baseStamina: 189,
                    baseSpirit: 166,
                },
                "DeathKnight": {
                    baseHealth: 8121,
                    baseMana: NaN,
                    baseAgility: 228,
                    baseIntellect: 121,
                    baseStrength: 309,
                    baseStamina: 189,
                    baseSpirit: 136,
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
                    spellPower: this.characterInput.spellPower,
                    critRating: this.characterInput.critRating,
                    totalHealth: this.calculateTotalHealth(this.characterInput),
                    totalMana: this.calculateTotalMana(this.characterInput)
                })
            }
            
        },
        calculateTotalHealth(character) {
            return this.classes[character.class].baseHealth + ( Math.min(20, character.stamina) + 10*(character.stamina - Math.min(20, character.stamina) ) )
        },
        calculateTotalMana(character) {
            return this.classes[character.class].baseMana + ( Math.min(20, character.intellect) + 15*(character.intellect - Math.min(20, character.intellect) ) )
        },
        validateCharacterInput() {
            if (!Number.isInteger(this.characterInput.level) || this.characterInput.level > this.maxLevel || this.characterInput.level < this.minLevel) {
                window.alert("Invalid level value, must be between min level of " + this.minLevel, + " and max level of " + this.maxLevel )
                return false
            }
            else if (!Number.isInteger(this.characterInput.stamina) || this.characterInput.stamina < this.classes[this.characterInput.class].baseStamina) {
                window.alert("Invalid stamina value, must be bigger or equal to base stamina of " + this.classes[this.characterInput.class].baseStamina)
                return false
            }
            else if (!Number.isInteger(this.characterInput.strength) || this.characterInput.strength < this.classes[this.characterInput.class].baseStrength) {
                window.alert("Invalid strength value, must be bigger or equal to base strength of " + this.classes[this.characterInput.class].baseStrength)
                return false
            }
            else if (!Number.isInteger(this.characterInput.intellect) || this.characterInput.intellect < this.classes[this.characterInput.class].baseIntellect) {
                window.alert("Invalid intellect value, must be bigger or equal to base intellect of " + this.classes[this.characterInput.class].baseIntellect)
                return false
            }
            else if (!Number.isInteger(this.characterInput.spirit) || this.characterInput.spirit < this.classes[this.characterInput.class].baseSpirit) {
                window.alert("Invalid spirit value, must be bigger or equal to base spirit of " + this.classes[this.characterInput.class].baseSpirit)
                return false
            }
            else if (!Number.isInteger(this.characterInput.agility) || this.characterInput.agility < this.classes[this.characterInput.class].baseAgility) {
                window.alert("Invalid agility value, must be bigger or equal to base agility of " + this.classes[this.characterInput.class].baseAgility)
                return false
            }
            else if (!Number.isInteger(this.characterInput.critRating) || this.characterInput.critRating < 0) {
                window.alert("Invalid agility value")
                return false
            }
            return true
        },
        setValidClassesForRace() {
            let classSelector = document.getElementById("classInput")
            this.removeOptions(classSelector)
            for (const value of this.races[this.characterInput.race].allowedClasses) {
                classSelector.options.add(
                    new Option(value, value, false)
                )
            }
        },
        populateRaceSelection() {
            Object.keys(this.races).forEach(function(key) {

                document.getElementById("raceInput").options.add(
                    new Option(key, key, false)
                )
              
              })
        },
        removeOptions(selectElement) {
            var i, L = selectElement.options.length - 1;
            for(i = L; i >= 0; i--) {
                selectElement.remove(i);
            }
        }
        
    
    },
    computed: {
        nextFreeId() {
            this.nextId = this.nextId + 1;
            return nextId
        },
        
    },
    mounted: function(){
        this.populateRaceSelection()
    }

})






