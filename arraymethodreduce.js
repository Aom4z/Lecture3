const arrayOfNumbers = [1,2,3,4];

const sum = arrayOfNumbers.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue;
});

console.log(sum);