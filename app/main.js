console.log("main.js linked...");
import AdjectiveController from "./controllers/AdjectiveController.js";
class App {
  constructor() {
    console.log("App says hi");
    this.adjectiveController = new AdjectiveController();
  }
}

window["app"] = new App();
