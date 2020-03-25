import AdjectiveService from "../services/AdjectiveService.js";

let _adjectiveService = new AdjectiveService();
let newAdj = "";
function _draw() {
  document.getElementById("mvcDescription").innerHTML = newAdj;
}
export default class AdjectiveController {
  constructor() {
    console.log("AdjectiveController says hi");
  }
  changeAdj() {
    newAdj = _adjectiveService.changeAdj();
    console.log("change() called...");
    console.log(newAdj);
    _draw();
  }
}
