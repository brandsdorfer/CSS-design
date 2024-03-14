let num = 0
let subscriptions = [
[]
]

function Call(){
        const link_whatssap = "https://wa.me/9720552927524?text=hello+joel+i+want+hear+more+about+your"
        window.open(link_whatssap)
}


function Do(){
  sendMessage("are you sure?", "open")
}

function ShowMenu(val="none"){
  const menu = document.querySelector(".menu-win");
  menu.style.display = val;
}

function sendMessage(content, type, val=0) {
  const messageWin = document.querySelector(".block-mes");
  const mesContent = document.querySelector("#mes-conntent");
  mesContent.textContent = content;
  if (type == "open") {
    messageWin.style.display = "flex";
  } else {
    messageWin.style.display = "none";
  }
  if(val == 1){
    const buttun1 = document.querySelector("#verify");
    buttun1.onclick = sendMessage("", "close")
  }

}

function Verify(num = 0){
  sendMessage("you name is " + document.querySelector("#name").value +  " and your phone is " + document.querySelector("#Phone").value, "open")
  const buttun1 = document.querySelector("#verify");
  const buttun2 = document.querySelector("#close");
  buttun1.style.display = "none";
  buttun2.textContent = "close";
  deletConntent()
  
}

function deletConntent(params) {
    const conntentInput = document.querySelector("#name");
    const conntentEmail = document.querySelector("#email");
    const conntentPhone= document.querySelector("#Phone");
    // // subscriptions[num][0] = conntentInput.value;
    // subscriptions[num][1] = conntentEmail.value;
    // subscriptions[num][2] = conntentPhone.value;
    conntentInput.value = ""
    conntentEmail.value = ""
    conntentPhone.value = ""
    num += 1;
    console.log(subscriptions)
  
}

function handleSubmit(event) {
  const buttun1 = document.querySelector("#verify");
  const buttun2 = document.querySelector("#close");
  buttun1.style.display = "block";
  buttun2.textContent = "cancel";


  event.preventDefault()
  Do()
}
