const filtreType = document.getElementById("type_filtre")
const autres = document.getElementsByClassName("autres")
const events = document.getElementsByClassName("event")
// const Autres = events.classList.contains("autres")

filtreType.addEventListener("change", function(){
    for (i=0; i<events.length; i++){
        events[i].style.display = "none"





        if (filtreType.value === " "){
            events[i].style.display = "block"
        }
        // if (filtreType.value === autres){
        //     events[i].style.display = "block"
        // }
    }
    // console.log(filtreType.value)
    console.log(document.getElementsByClassName("autres").length)
    // console.log(Autres)
})
