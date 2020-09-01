class Food{
    constructor(){
        
    }
    getfood() {
     var foodRef = database.ref("food");
     foodRef.on("value",(data)=>{ milk=data.val(); }) } 
    update(food) { 
     database.ref('/').update({food:food}); }
}