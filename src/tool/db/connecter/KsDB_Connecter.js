"use strict";
var mysql = require('mysql2/promise'); // mysql 변수에 mysql 모듈을 할당 
var KsDbConnecter = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '0724',
    // host : '203.228.206.141', //host객체 - 마리아DB가 존재하는 서버의 주소 
    // // host : '10.0.64.131', //host객체 - 마리아DB가 존재하는 서버의 주소 
    // user : 'msconn', //user객체 - 마리아DB의 계정 
    // password : 'Jtnetqr12!', //password객체 - 마리아DB 계정의 비밀번호 
    database: 'msbase',
    waitForConnections: true,
    connectionLimit: 30,
    queueLimit: 0
});
// KsDbMaria.connet(); 
module.exports = KsDbConnecter;
