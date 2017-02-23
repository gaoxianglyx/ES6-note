let GetRandomArr = x => {
    //生成一个0到100的数组
    let arr1 = new Array();
    for(let i = 0; i <= x; i++) {
        arr1.push(i);
    };
    //生成0到n的随机数
    let GetRandom = n => {
        return Math.round(Math.random() * n);
    }

    let arr2 = new Array();
    for(let i = x; i >=0; i--) {
        let n =GetRandom(i);
        arr2.push(arr1[n]);
        arr1.copyWithin(n ,i , i+1);
    };
    console.log(arr2);
}
GetRandomArr(100);
exports.default =  GetRandomArr;