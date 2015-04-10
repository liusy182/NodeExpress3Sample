'use strict';
var photos = [];

photos.push({
    name: 'sample png 1',
    path: 'http://www.fnordware.com/superpng/pnggrad16rgb.png'
});

photos.push({
    name: 'sample png 2',
    path: 'http://www.fnordware.com/superpng/pngtest8rgba.png'
});


exports.list = function (req, res) {
    res.render('photos', {
        title: 'photos',
        photos: photos
    });
}