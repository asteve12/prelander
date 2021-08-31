class printName {
  printer() {
    console.log;
  }
}

class helper extends printName {
  do() {
    this.printer();
  }
}

const a = new helper();
console.log(a.do);
