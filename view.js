//view-to show data insdide html

class View{
    constructor(){
        this.light=document.getElementById('light')
        this.milkQty=document.getElementById('milkQty')
        this.powderQty=document.getElementById('powderQty')
        this.sugarQty=document.getElementById('sugarQty')
        this.errorDiv=document.getElementById('errorDiv')
        this.errorIngredient=document.getElementById('errorIngredient')
        this.enjoyCoffeeMsg=document.getElementById('coffeeMade')

        this.clrMilkInput=document.getElementById('milkInput')
        this.clrPowderInput=document.getElementById('powderInput')
        this.clrSugarInput=document.getElementById('sugarInput')

        
    }

    turnOnLight(){
        this.light.classList.remove('off')
        this.light.classList.add('on')
    }

    turnOffLight(){
        this.light.classList.remove('on')
        this.light.classList.add('off')
    }

    showMilkQty(qty){
        this.milkQty.innerHTML=qty
    }

    showPowderQty(qty){
        this.powderQty.innerHTML=qty
    }

    showSugarQty(qty){
        this.sugarQty.innerHTML=qty
    }

    showError(ingredient){
        this.errorDiv.classList.remove('hidden')
        this.errorIngredient.innerHTML=ingredient
        setTimeout(()=>{
            this.errorDiv.classList.add('hidden')
        },3000)
    }

    enjoyCoffee(){
        this.enjoyCoffeeMsg.classList.remove('hidden')
        setTimeout(()=>{
            this.enjoyCoffeeMsg.classList.add('hidden')
        },2000)
    }

    clearMilkInput(){
        this.clrMilkInput.value=""
    }
    clearPowderInput(){
        this.clrPowderInput.value=""
    }
    clearSugarInput(){
        this.clrSugarInput.value=""
    }

   
}

const view=new View()
export default view