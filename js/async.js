const second =()=>{
    console.log('second');
}
console.log('first');
second();
setTimeout(() => {
    console.log('third');
},2000);
console.log('fourth');




