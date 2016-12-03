class HomeController {
  constructor() {
    //do something
  }

  printHello(req, res) {
    console.log("hello");
    res.send("hello");
  }
}

module.exports = HomeController;
