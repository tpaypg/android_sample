

let mysql = require('mysql2/promise'); // mysql 변수에 mysql 모듈을 할당 
let KsDbConnecter = mysql.createPool({ //db변수에 mysql변수에 있는 크리에이드커넥션 메소드를 호출(객체를 받음) 할당 
    host : '127.0.0.1', //host객체 - 마리아DB가 존재하는 서버의 주소 
    user : 'root', //user객체 - 마리아DB의 계정 
    password : '0724', //password객체 - 마리아DB 계정의 비밀번호 
    database : 'msbase', //database객체 - 접속 후 사용할 DB명 

    waitForConnections: true,
    connectionLimit: 30,
    queueLimit: 0
}); 
// KsDbMaria.connet(); 
module.exports = KsDbConnecter;
