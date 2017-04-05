/**
 * Created by Administrator on 2017/4/5.
 */
var sub = require('./sub');
var css = require('./css/main.css');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);