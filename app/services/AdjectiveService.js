import MvcDescriptor from "../models/MvcDescriptor.js";

let _mvcDescriptor = new MvcDescriptor();

export default class AdjectiveService {
  constructor() {
    console.log("AdjectiveService says hi");
  }
  changeAdj() {
    _mvcDescriptor.numOfClicks++;
    if (_mvcDescriptor.numOfClicks >= _mvcDescriptor.descriptor.length - 1) {
      return _mvcDescriptor.descriptor[_mvcDescriptor.descriptor.length - 1];
    }
    console.log("We got there!");
    return _mvcDescriptor.descriptor[_mvcDescriptor.numOfClicks];
  }
}
