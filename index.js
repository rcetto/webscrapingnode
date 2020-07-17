const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

request('https://www.aemps.gob.es/acciones-informativas/alertas/medicamentos-uso-humano/', (err, res, body) => {
    if (!err && res.statusCode == 200) {
        
    }

});
