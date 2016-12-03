const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));
const request = Promise.promisify(require('request'));

class ReadFileController {
  constructor() {
    //do something
  }

  static readFromFile(fileName) {
    return fs.readFileAsync('./test' + fileName, 'utf8');
  }

  read(req, res) {
    const promises = [];
    promises.push(ReadFileController.readFromFile('file1.txt'),
                  ReadFileController.readFromFile('file2.txt'),
                  new Promise((resolve, reject) => {
                    let arr = ["arr1", "arr2"];
                    arr.forEach(elem => {
                      console.log(elem);
                    })

                    request('http://www.google.com', (error, response, body) => {
                      if (response && response.statusCode == 200) {
                        console.log(response)
                        resolve("success");
                      } else {
                        reject("failure");
                      }
                    })
                  }));

    Promise.all(promises)
          .then((result) => {
            res.send(result);
          }).catch(error => {
            console.log(error);
            res.send(error);
          });
    // fs.readFileAsync('./testfile1.txt', 'utf8')
    //   .then((data) => {
    //     console.log(data);
    //   })
  }


}

module.exports = ReadFileController;
