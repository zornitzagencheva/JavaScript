function biggerThanNeighbors(index,  arr) {
    if(index == 0 || index == arr.length - 1 ) {
        console.log('only one neighbor');
    }else if(index > arr.length - 1 || index < 0) {
        console.log('invalid index');
    }else {
        if(arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
            console.log('bigger');
        }else {
            console.log('not bigger');
        }
    }
}