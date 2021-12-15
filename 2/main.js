
function sortwithoutmovetree(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++){
            if(arr[i] != -1 && arr[j] != -1){
                if(arr[j]<arr[i]){
               let temp=arr[j]
               arr[j]=arr[i]
               arr[i]=temp
                }
            }
        }

    }
    return arr
}
console.log(sortwithoutmovetree([-1, 150, 190, 170, -1, -1, 160, 180]))

















// function sortByHeight(a) {

//     const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1);
//     let sortedAIndex = 0;
//     for (let i = 0; i < a.length; i++) {
    
//     if (a[i] === -1) continue;
//     else {
    
//     a[i] = sortedA[sortedAIndex++];
//     }
//     }
//     return a;
//     }
//     console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))