const menu = document.getElementById("menu")
const checkoutBtn = document.getElementById("checkout-btn")
const clesemodalbtn = document.getElementById("close-modal-btn")



//Check horario

function checkRestaurantOpen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora <22;
    //True Restaurante
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();
if(isOpen){
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600")
}else{
    spanItem.classList.remove("bg-green-600")
    spanItem.classList.add("bg-red-500")
}

