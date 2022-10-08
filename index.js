"use strict"

function 



function log() {
    console.log("over")
}
{
const firstName = document.getElementById("firstName").value;
console.log(firstName);
const numberOfNight = Document.getElementById("numberOfNights").value;

let room = document.querySelector(
    "input[name='roomSelector']:checked"
),value;
let currentMounth = checkInDate.getMonth();
let inSeason = false;
let price = 0;
swith (currentMounth) {
    case 5:
    case 6:
    case 7:
        inSeason = true;
        break;
    default;
      inSeason = false;
      break;
}
if (inSeason && (room == "queen" || room == "king")) {
    price = 250 * numberOfNight;
} else if (!inSeason && (room == "queen" || room == king)) {
    price = 150 * numberOfNight;
 }
}
