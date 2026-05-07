let money = 10000;

function update(){

  document.getElementById("money").innerText = money;

}

function bet(odd){

  let stake = 100;

  let win = Math.random() > 0.5;

  if(win){

    money += stake * odd;

    alert("Fitoje!");

  }else{

    money -= stake;

    alert("Humbe!");

  }

  update();

}

function slot(){

  let r = Math.random();

  if(r > 0.7){

    money += 500;

    document.getElementById("slotResult").innerText =

    "JACKPOT +500";

  }else{

    money -= 100;

    document.getElementById("slotResult").innerText =

    "Lose -100";

  }

  update();

}

function dogRace(){

  let dogs = [

    "Dog 1",

    "Dog 2",

    "Dog 3",

    "Dog 4"

  ];

  let winner =

  dogs[Math.floor(Math.random()*dogs.length)];

  document.getElementById("dogResult").innerText =

  winner + " won the race!";

}

function show(id){

  let pages =

  document.querySelectorAll(".page");

  pages.forEach(p =>

    p.classList.add("hidden")

  );

  document

  .getElementById(id)

  .classList.remove("hidden");

}
