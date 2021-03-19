function oddSort (array){
    let odd=[]
    let a = 0 
    for(let i = 0; i<array.length; i++){
        if(array[i]%2!=0){
            
            for(let j=a; j<a+1; j++){
                odd[j]= array[i]; 
            }
            a+=1
        }
    }
    return odd
}
let ar=[3,5,2,4,7,8,9,10,20,12,14,15,1,2,0,10,11]
console.log(oddSort(ar))




function evenSort (array2){
    let even=[]
    let a =0 
    for(let i = 0; i<array2.length; i++){
        if(array2[i] === 0) continue;
        if(array2[i]%2==0){
            
            for(let j=a; j<a+1; j++){
                even[j]= array2[i]; 
            }
            a+=1
        }
    }
    return even
}
let arr=[3,5,2,4,7,8,9,10,20,12,14,15,1,2,0,10,11]
console.log(evenSort(arr))

// Calculator

let btn = document.querySelector('#calculate')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let operation = document.querySelector('#operation')
let screen = document.querySelector('#result')



btn.addEventListener('click', function(even){
    let n1 = Number(num1.value) 
    let n2 = Number(num2.value)
    let result 
    if ( operation.value === '+'){
        result = n1 +n2
    }
    else if( operation.value === '-'){
        result = n1-n2
    }
    else if( operation.value === '*'){
        result = n1*n2
    }
    else if( operation.value === '/'){
        result = n1 / n2
    }
    else if ( operation.value === ''){
        result = ' Please fill out all field'
    }
    else {
        result = 'You press wrong button. Please be carefully!!!'
    }
    screen.textContent = result
})