console.log('First');
console.log('Second');
const outID = setTimeout(()=>{console.log('Third');
},2000);
clearTimeout(outID);
let second = 0;
const inId = setInterval(()=>{
    console.log(++second);
    if(second===10){
        clearInterval(inId);
    }
},500)
console.log('fourth');
