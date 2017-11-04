'use strict';

const Raspistill = require('node-raspistill').Raspistill;
const raspistill = new Raspistill();

exports.take_photo = function (req, res) {
    raspistill.takePhoto()
    .then((photo) => {
        console.log('took photo', photo);
    })
    .catch((error) => {
        console.error('something bad happened', error);
    });
};