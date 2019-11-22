//Express 기본 모듈 불러오기.

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
//Express 객체 생성
var app = express();

//기본포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);


app.use(static(path.join(__dirname, 'public')));


//Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express 서버를 시작했습니다. : '+ app.get('port'));
});
