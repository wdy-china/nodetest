//buffer   二进制数据     缓存区

/*
什么时buffer？
从类型来说就是一个类数组
从内存来说就是开辟的新的内存空间
作用：
处理二进制数据
解决数据传输过大的问题
案例：文件流     事件流    Tcp

别名：缓存区（等待区）

什么时二进制数据（0b）？   八进制（0）    十六进制（0x）
返回0和1（10101010）

创建buffer：
new buffer()  已经废弃
因为buffer是一个全局对象，所以不需要通过require加载

buffer的方法：
toJSon    toString    slice    contact      length
字节bit  byte

buffer的编码类型
utf-8   base64    hex   Ascii    unicode

*/
//buffer.from()   把字符串转换为buffer
var buf = Buffer.from("node")
// console.log(buf)//<Buffer 6e 6f 64 65>
// console.log(buf.toString())//node
//返回初始化的数据 ，防止生成新的数据包含旧数据
// var buf = Buffer.alloc(10)
// console.log(buf.length)
//不安全，不推荐使用  未被初始化的数据
// var buf = Buffer.allocUnsafe(10)

console.log(buf.toString("base64"))

// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例