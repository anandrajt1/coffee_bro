//controller-to handle btn clicks
import model from "./model.js"
import view from "./view.js"

class Controller{
    //initailze all the btn cntrols inside constructor
    constructor(){
        this.powerBtn=document.getElementById("powerBtn")
              

        this.milkForm=document.getElementById('milkForm')
             


        this.powderForm=document.getElementById('powderForm')
        this.sugarForm=document.getElementById('sugarForm')

        this.brewBtn=document.getElementById('brew-btn')

        this.resetBtn=document.getElementById('resetBtn')


         
    }


    //make a new fn to decide what should happen when these btns are clicked(any name)
    start(){
        this.powerBtn.addEventListener("click",this.switchPower)
        this.milkForm.addEventListener("submit",this.addMilk)
        this.powderForm.addEventListener("submit",this.addPowder)
        this.sugarForm.addEventListener("submit",this.addSugar)
        this.brewBtn.addEventListener("click",this.brew)
        this.resetBtn.addEventListener("click",this.reset)
    }
    switchPower=()=>{
        model.switchPower()
        const power=model.getPowerstatus()
        
        if(power){
            view.turnOnLight()
        }else{
            view.turnOffLight()
        }
    }

    addMilk=(e)=>{
        e.preventDefault()
        const quantity=Number(this.milkForm['milkInput'].value)
        model.addMilk(quantity)
        const milkQuantity=model.getMilkQuantity()
        view.showMilkQty(milkQuantity)
    }

    addPowder=(e)=>{
        e.preventDefault()
        const quantity=Number(this.powderForm['powderInput'].value)
        model.addPowder(quantity)
        const powderQuantity=model.getPowderQuantity()
        view.showPowderQty(powderQuantity)


    }

    addSugar=(e)=>{
        e.preventDefault()
        const quantity=Number(this.sugarForm['sugarInput'].value)
        model.addSugar(quantity)
        const sugarQuantity=model.getSugarQuantity()
        view.showSugarQty(sugarQuantity)
    }

    brew=()=>{
        const power=model.getPowerstatus()
        //check if power is ON
        if(power){
            //now reduce some quantity after brewing- define use fns in model
        const newMilkQuantity=model.useMilk(100)
        if(newMilkQuantity === -1){
            view.showError('milk')
            return
        }

        const newPowderQuantity=model.usePowder(10)
        if(newPowderQuantity === -1){
            view.showError('powder')
            return
        }

        const newSugarQuantity=model.useSugar(20)
        if(newSugarQuantity === -1){
            view.showError('sugar')
            return
        }

        //now update it in view

        view.showMilkQty(newMilkQuantity)
        view.showPowderQty(newPowderQuantity)
        view.showSugarQty(newSugarQuantity)
        
        view.enjoyCoffee()
        

        }else{
            alert("Turn On Power!")
        }

    }

    reset=()=>{
        model.clear()
        view.showMilkQty(0)
        view.showPowderQty(0)
        view.showSugarQty(0)

        view.clearMilkInput()
        view.clearPowderInput()
        view.clearSugarInput()

    }
}

const controller=new Controller() //making an obj

controller.start() //to start the prgm