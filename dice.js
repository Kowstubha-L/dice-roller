function roller(){
   const textid = document.getElementById("textid").value;
   const diceresult = document.getElementById("diceresult");
   const diceimage = document.getElementById("diceimage");
   const result = document.getElementById("result");
   const values = [];
   const images = [];

   for(let i=0;i < textid;i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="diceimages/${value}.JPG" alt="Dice ${value}">`);
   }
  
   diceresult.textContent = `dice : ${values.join(', ')}`;
   diceimage.innerHTML = images.join('');
}