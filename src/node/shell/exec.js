let callfile = require('child_process'); 
let fs       = require('fs');
let path     = require('path');
let request  = require('request');
 

let zipResources = (urls, dir) => {
    let getResources = (url, dir) => {
        return new Promise((res, rej) => {

            let getImgs = (url, dir) => {
                
                !fs.existsSync(dir) && fs.mkdirSync(dir);
                
                if (Array.isArray(url)) {
                    url.forEach(v => getImgs(v, dir));
                    return;
                }

                getImgs.count++;
                
                let fileName = url.match(/[^\/]*$/);

                new Promise(function (resolve, reject) {
                    request({
                        url: url,
                        encoding: 'binary'
                    }, function (err, res, body) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(body);
                        }
                    });
                }).then(function (body) {
                    if (--getImgs.count === 0) {
                        res();
                    }
                    fs.writeFileSync(path.join(dir, fileName[0]), body, 'binary');
                }).catch(function (e) {
                    rej(e);
                });
            };
            getImgs.count = 0;
            getImgs(url, dir);
        });
    };

    let zip = dir => {
        callfile.exec(`tar -czf ${dir}.tar.gz ${dir}`);
    }

    getResources(urls, dir).then(() => {
        zip(dir);
        console.log('success');
    }).catch(e => {
        console.log(e);
    });
};


let urls = [
    'http://sandbox.petkit.com/images/common/resources/picture-cap.png',
    'http://img3.petkit.com/img/cda18ea92bb8434d85d1eed0e3051b66'
];
let dir = './images';

zipResources(urls, dir);
