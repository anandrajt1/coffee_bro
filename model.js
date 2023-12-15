// model-for data storage

class Model{
    constructor() {
        this.power = false; // Initially power is off
        this.milk=0;
        this.powder=0;
        this.sugar=0;
    }
    

//fn to turn on and turn of the mchine
    switchPower(){
        this.power = !this.power;
       

    }

    getPowerstatus(){
        return this.power
    }
    

    addMilk(qty){
        this.milk=this.milk+qty
    }
    getMilkQuantity(){
        return this.milk
    }
    useMilk(qty){
        if((this.milk-qty)>=0){
            this.milk=this.milk-qty
            //now we want to know how much is remaining after this usage
            return this.milk

        }
        return -1
       
    }


    addPowder(qty){
        this.powder=this.powder+qty
    }
    getPowderQuantity(){
        return this.powder
    }
    usePowder(qty){
        if((this.powder-qty)>=0){
            this.powder=this.powder-qty
        return this.powder

        }
        return -1
        
    }



    addSugar(qty){
        this.sugar=this.sugar+qty
    }
    getSugarQuantity(){
        return this.sugar
    }
    useSugar(qty){
        if((this.sugar-qty)>=0){
            this.sugar=this.sugar-qty
        return this.sugar

        }
        return -1
    }

    clear(){
        this.milk=0;
        this.powder=0;
        this.sugar=0;
    }
    
}

const model=new Model()
export default model