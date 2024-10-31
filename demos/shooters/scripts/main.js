let threePointShooters = [
  {
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 42.1,
  },
  {
    name: "Klay Thompson",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 41.2,
  },
  {
    name: "Desmond Bane",
    team: "Memphis Grizzlies",
    position: "Guard",
    threePointPercentage: 40.8,
  },
  {
    name: "Kevin Huerter",
    team: "Sacramento Kings",
    position: "Guard",
    threePointPercentage: 40.2,
  },
  {
    name: "Buddy Hield",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 42.5,
  },
  {
    name: "Michael Porter Jr.",
    team: "Denver Nuggets",
    position: "Forward",
    threePointPercentage: 41.4,
  },
  {
    name: "Luke Kennard",
    team: "Memphis Grizzlies",
    position: "Guard",
    threePointPercentage: 44.0,
  },
  {
    name: "CJ McCollum",
    team: "New Orleans Pelicans",
    position: "Guard",
    threePointPercentage: 40.7,
  },
  {
    name: "Kyrie Irving",
    team: "Dallas Mavericks",
    position: "Guard",
    threePointPercentage: 40.2,
  },
  {
    name: "Bojan Bogdanovic",
    team: "Brooklyn Nets",
    position: "Forward",
    threePointPercentage: 41.1,
  },
];

let playersTBody = document.querySelector("#playersTBody");
console.log(playersTBody);

function buildTableRow(shooter) {
  // let tr = document.createElement("tr");
  // playersTBody.appendChild(tr);
  //OR
  let tr = playersTBody.insertRow(-1)

  // let td1 = document.createElement("td");
  // playersTBody.appendChild(td1);
  //OR
  let td1 = tr.insertCell();
  td1.innerText = shooter.name;


  // let td2 = document.createElement("td");
  // tr.appendChild(td2);
  let td2 = tr.insertCell();
  td2.innerText = shooter.team;

  // let td3 = document.createElement("td");
  // tr.appendChild(td3);
  let td3 = tr.insertCell();
  td3.innerText = shooter.position;

  // let td4 = document.createElement("td");
  // tr.appendChild(td4);
  let td4 = tr.insertCell();
  td4.innerText = shooter.threePointPercentage;
}

function loadShootersTable() {
  threePointShooters.sort(function (playerA, playerB) {
    return playerB.threePointPercentage - playerA.threePointPercentage;
  });

  for (const shooter of threePointShooters) {
    buildTableRow(shooter);
  }
}

loadShootersTable();
