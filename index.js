function ArrayReverse(array){
    for(let i=0 ; i< array.length ; i++){
        if( i > Math.floor((array.length -1 ) / 2)){
            break;
        }
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
    return array
}

const Array = [10,20,30,40,50,60,70,80]
console.log(ArrayReverse(Array))