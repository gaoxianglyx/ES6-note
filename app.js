/*Es6x学习*/

/*console.log('#########ES6学习###########');
for(let i = 1; i < 3; i++){}
//输出undefined，let声明的变量只在该块级作用域下有效，没有变量提升
console.log(i);*/

let foo = 'outer';
//func = x => foo == function (x){return foo}
function bar(funct = x => foo) {
  let foo = 'inner';
  console.log(funct()); // outer,因为函数(func)的作用域是在声明时的作用域
}
bar();
//上面的代码等于下面的
/*let foo = 'outer';
let f = x => foo;
function bar(func = f) {
  let foo = 'inner';
  console.log(func()); // outer
}
bar();*/


//不能重复声明
/*function func(arg) {
  let arg; // 报错
}
function () {
  let a = 10;
  var a = 1;// 报错
}
function () {
  let a = 10;
  let a = 1;// 报错
}*/


//块级作用域，es5函数声明提升到顶部,会输出inside，es6不管if会不会执行，都不会影响if外部，会输出outside，
function f() { console.log('I am outside!'); }
(function () {
 /* 然而有这个if，执行会出错，用babel在线没问题，呵呵
  if(false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }*/
  f();
}());


//let命令、const命令、class命令声明的全局变量，不属于全局对象的属性
/*let b = 1;
window.b*///undefined

//新赋值方式——解构,匹配不成功会赋值undefined，右边必须是可以遍历的对象
var [a, b, c] = [1, 2, 3];
console.log(a+" "+ b);
//可以不完全解构
var [x, y] = [4, 5, 6,];
console.log(x+' '+y);//4 5


function* fibs() {
    var a = 0;
    var b = 1;
    while(true){
        //yield定义返回的值
        yield a;
        [a, b] = [b, a + b];
    }
}
var [a, b, c, d, e, f, g] = fibs();
console.log(a+" "+b+" "+c+" "+d+" "+e+" "+f+" "+g);//0,1,1,2,3,5,8

//设定默认值
var [fo1 = 1] = [2];
console.log(fo1);//2
var [fo2 = 1] = [undefined];
console.log(fo2);//1,测试赋值为undefined，启用默认值

console.log(0b11111111);//0b,代表2进制
console.log(0o11);//0o代表8进制

//Math新属性,都是静态方法，只能Math对象本身调用
Math.trunc(4.1);//取整数部分
Math.sign(-5);//返回正数（1）还是负数（-1）
Math.clz32(0);//javascript中整数都是以32位二进制来存储的，这个函数返回这个数的32位二进制前面的0的位数，这里为32
Math.sin(Math.Pi);//还加入了三角函数的方法 good
/*Es6x学习7语法
console.log(2 ** 2);//指数运算符
var b =3;
b **=2;//等同于b =b * b * b;*/



let arrayLike = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    length: 3
};
//Array.from把类数组转化为数组，输出a，b，c。很多类似数组的对象(如querySelectorAll返回的对象这种有length的)要转换为数组才能用forEach
var arr2 = Array.from(arrayLike);
console.log(arr2);
var arr3 = Array.from(arrayLike, x =>x+'gg');
//利用Array.from的第二个参数，进行数组元素的map便利操作
console.log(arr3);//[ 'agg', 'bgg', 'cgg' ]

console.log(Array.from({length: 3}, () => 'Nate'));//[ 'Nate', 'Nate', 'Nate' ]

console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 5));//34545，从2号位到5号位前复制给从0号位开始

console.log([1, 2, 3, 4, 5].find((n) => n > 3));//输出4，返回第一个符合条件的数

//keys遍历数组键值名,values()变量数组值,entries()遍历键值对
for(let [index, elem] of ['a', 'b'].entries()){
    console.log([index, elem]);
}//[ 0, 'a' ][ 1, 'b' ]

console.log([1, 2, 3].includes(3,2));//检查是否包括，第二个参数表示开始检查的位置

//可以为函数设置默认值，哈哈
function log(x ,y = 'World') {
    console.log(x, y);
}
log('Hello ')// Hello World

//函数默认值结合解构赋值，一般把尾参数设置默认值，undefined会触发默认值，null不会
function m1({x = 0, y = 0} = {}){
    console.log(x, y);
}
function m2({x, y} = { x: 0, y: 0}){
    console.log(x, y);
}
m1({x: 3});//3,0,m1默认值是空对象，设置了解构赋值的默认值为0,参数覆盖{}，解构后存在x，便覆盖x
m2({x: 3});//3,undefined，m2默认值是一个有属性的函数，没有设置解构的默认值，参数覆盖x=0,y=0


function add(...values) {
    let sum = 0;
    for(var val of values) {
        sum += val;
    }
    console.log(sum);
}
add(1, 2, 4, 5);//rest(...)函数，传入任意数目的参数，但是只能是最后一个参数

function q(x, y, z){
    console.log(x+''+y+''+z);
}
var args = [1, 4, 7];
q(args);//147undefinedunderfined
q(...args);//147，...扩展运算符可以展开数组作为参数

var args2 = [2, 5, 8];
console.log([...args, ...args2])//合并数组，好方便哈哈

var g = () => 5;//等同于var g=function(){return 5;};
console.log(g());//输出5

var id = 10;
function fu(){
    setTimeout(() =>{
        console.log("id :", this.id);
    },1000);
}
fu.call({id: 8});//输出id：8

//输出3，箭头函数没有this,所以定义的this就是外层的this
function Timer(){
    this.time = 0;
    bb =setInterval(() =>
        this.time++, 1000);
}
var timer = new Timer();
setTimeout(() => {console.log(timer.time);clearInterval(bb)}, 3100);

//assign,将后面对象的可枚举属性复制给第一个参数对象,只复制属性，会覆盖
var s1 = { a: 1};
var s2 = { b: 2, a: 3};
var s3 = {};
Object.assign(s3, s1, s2);
s2 = {b: 3};
console.log(s3);//b: 2, a: 3


let proto = {};
let obj = { x: 10 };
//将proto对象设置为obj的原型
Object.setPrototypeOf(obj, proto);
proto.y = 8;
console.log(obj.y);

var Q = Symbol();
var a = {};
a.Q = 'QQQ';
//调用的时候要放入[],不然调用的是字符串，而不是Symbol
console.log(a['Q']);

//代理初尝试
var person = {
    name: '高翔'
};
var proxy = new Proxy(person, {
    get : function(target, property){
        if(property in target){
            return target[property];
        } else{
            throw new ReferenceError('出错咯');
        }
    }
});
console.log(proxy.name);
console.log(proxy.age);//执行else语句，抛出错误

