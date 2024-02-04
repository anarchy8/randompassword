const passwordText = document.getElementById("password-h1");
const buton = document.getElementById("btn");






function Rastgele(){
  
  let keywords = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","ı","j",
  "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B",
  "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
  "V","W","X","Y","Z","-","_","*","?","/",">","<","&","!","+","£","$","%",
  ";"];
  let password = "";

  for(let i = 0; i<15; i++){

    let random = keywords[Math.floor(Math.random()*keywords.length)];
    password = random + password;
    
  }
  passwordText.innerText = password;
}

buton.onclick = Rastgele;