/**
 * Created by Administrator on 2017/4/5.
 */
//我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = generateText;