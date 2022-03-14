"use strict";
var mysql = require('mysql2/promise'); // mysql 변수에 mysql 모듈을 할당 
var KsDbConnecter = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '0724',
    database: 'msbase',
    waitForConnections: true,
    connectionLimit: 30,
    queueLimit: 0
});
// KsDbMaria.connet(); 
module.exports = KsDbConnecter;
