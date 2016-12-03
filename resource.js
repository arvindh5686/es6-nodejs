'use strict'

const Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

class ResourceController {
  constructor(app) {
    this.setupResources(app);
  }

  setupResources(app) {
    app.get('/', (req, res) => {
      res.send("hello");
    });

    app.get('/read', (req, res) => {
      const promises = [];
      promises.push(fs.readFileAsync('./testfile1.txt', 'utf8'),
                    fs.readFileAsync('./testfile2.txt', 'utf8'));
                    
      Promise.all(promises)
            .then((result) => {
              console.log(result);
              res.send(result);
            });
      //
      // fs.readFileAsync('./testfile1.txt', 'utf8')
      //   .then((data) => {
      //     console.log(data);
      //   })
    });
  }
}

module.exports = ResourceController;
