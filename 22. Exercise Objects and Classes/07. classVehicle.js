
    class Vechicle {
        constructor(type, model, parts, fuel) {
            this.type = type,
            this.model = model,
            this.parts = {
                engine: parts.engine,
                power: parts.power,
                qulity: parts.engine * parts.power
            };
            this.drive = function(decr) {
                this.fuel = fuel - decr;
            };
        }   
    }