'use strict'
let data = [1,2,3,4,5];
let target = 4.6;
class Search{
    binarySearch(){
        function binary(data, target, start, end){
            console.log(data[start]+'-'+data[end]);
            if(end < 1){
                return data[0];
            }
            const middle = Math.floor(start + (end - start)/2);
            if (target == data[middle]){
                return data[middle];
            }
            if (end - 1 === start){
                return Math.abs(data[start] - target) > Math.abs(data[end] - target) ? data[end] : data[start];
            }
            if (target > data[middle]){
                return binary(data,target,middle,end);
            }
            if (target < data[middle]){
                return binary(data,target,start,middle);
            }
        }
        binary(data,target, 0, data.length-1);
    }
}
let obj = new Search();
obj.binarySearch();
