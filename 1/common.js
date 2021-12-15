//Solution:
// function getSameCount(str1, str2) {
//     let count = 0;
//     const obj = str2.split("");
//     for(str of str1){
//       let idx = obj.findIndex(s => s === str);
//       if(idx >= 0){
//         count++;
//         obj.splice(idx, 1);
//       }
//     }
//     return count;
//   }
  
//   //Test:
//   console.log(getSameCount("abcd", "aad"));
//   console.log(getSameCount("aabcc", "adcaa"));
//   console.log(getSameCount("aad", "abcd"));
//   console.log(getSameCount("platformforgeeks", "geeksforgeeks"));
////////////////////////////////////////////////////////////////////////////

// function countMatch(s1,s2){
//     var count = 0;
//     while(s1.length && s2.length){
//         if(s2.includes(s1.charAt(0))){
//             count++;
//             s2 = s2.replace(s1.charAt(0),"");
//             s1 = s1.slice(1);
//         }
//         else {
//             s1 = s1.slice(1);
//         }
//     }
//     return count;
// }

// console.log(countMatch("aabcc", "adcaa"));
////////////////////////////////////////////////////////
