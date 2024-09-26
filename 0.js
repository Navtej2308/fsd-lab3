var arr = [1,2,3,'a','abc',true,{a:'abc'}];
console.log(arr[6]);        //print 6th index

var a=[100,200,300,400];
console.log(a);

a.push(500);    //push element
console.log(a);

a.pop();        //last element pop
console.log(a);

a.shift();      //first element pop
console.log(a);

a.unshift(300);     //add element at first pos
console.log(a);

console.log(a.join('*'));