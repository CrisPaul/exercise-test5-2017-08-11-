'use strict'
function deleteNode(arr, n){
    var resArr = [];
    arr.forEach(function (elem) {
        if(elem !== n){
            resArr.push(elem);
        }
    })
    return resArr;
}
function operateList(str, num){
    var resArray = [], sym = /\-\>/g;
    var array = str.replace(sym,',').split(',');
    resArray = deleteNode(array, num).join('->');
    console.log("Given string: "+str+"\n"+"Result: "+resArray);
}
var num= '3', str = '1->2->3->3->4->5->3';
operateList(str,num);