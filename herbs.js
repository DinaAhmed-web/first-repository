

const herbs = document.getElementsByClassName('herb');  
const radiosBtns = document.getElementsByClassName("filterBtn");
let checkValue = "";

for (let i = 0; i < radiosBtns.length; i++) {
    console.log(radiosBtns[i]);

    radiosBtns[i].addEventListener("click",function(event){
        console.log(event.target.value);
checkValue = event.target.value;
if(checkValue){
    for (let i = 0; i < herbs.length; i++) {

        if(herbs[i].classList.value.includes(checkValue)){
            herbs[i].style.display= "block";
        } else{
            herbs[i].style.display= "none";
        }
        
    }
} else {
    for (let i = 0; i < herbs.length; i++) {
            herbs[i].style.display= "block";
    }
}
    })
}







// console.log(herbs[0].classList.value.includes("vitC"));
