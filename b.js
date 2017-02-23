//我使用ES的import引入始终报错，只好复制过来
let GetRandomArr = x => {
    let arr1 = new Array();
    for(let i = 0; i <= x; i++) {
        arr1.push(i);
    };
    let GetRandom = n => {
        return Math.round(Math.random() * n);
    }
    let arr2 = new Array();
    for(let i = x; i >=0; i--) {
        let n =GetRandom(i);
        arr2.push(arr1[n]);
        arr1.copyWithin(n ,i , i+1);
    };
    //输出数组大小为2的所有可能性
    let arr3 = new Array(2);
    for(let i = 0; i <5; i++) {
        arr3[0] = arr2[i];
        for(let n = i+1; n<6; n++) {
            arr3[1] = arr2[n];
            console.log(arr3.reverse());
            console.log(arr3.reverse());
        }
    }
}
GetRandomArr(5);