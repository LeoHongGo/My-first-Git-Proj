// 引入 events 模块
var event = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new event.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('datareceived');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connections', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('datareceived', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connections');

console.log("程序执行完毕。");