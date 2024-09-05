// 10 ta "function" masala

// task 1
{
    let adult = 18;

    function ifAdult(user){
        if(user >= adult){
            return `kattasiz`
        }else{
            return `kichiksiz`
        }
    }
    console.log(ifAdult(17));
}

// task 2 
{
    function checkIfNeg(num){
        if(num > 0){
            return `musbat`
        }else{
            return `manfiy`
        }
    }
    console.log(checkIfNeg(-1));
}

// task 3
{
    let count = 0;
    function countPos(a, b, c){
        if(a > 0){count++}
        if(b > 0){count++}
        if(c > 0){count++}
        return count
    }
    console.log(countPos(2, -6, 9));
}

// task 4
{
    function evenOrOdd(num){
        let remainder = num % 2
        if(remainder == 0 ){
            return `${num} juft son!`
        }else{
            return `${num} toq son!`
        }
    }
    console.log(evenOrOdd(6));
}

// task 5
{
    function ifEven(num){
        let remainder = num % 2;
        if(remainder == 0){
            return `soningiz juft! ikkiga bolinadi! ${num / 2}`
        }else{
            return `soningiz toq! ikkiga kopayadi! ${num * 2}`
        }
    }
    console.log(ifEven(5));
}

// task 6
{
    function multipleTasks(num){
        if(num === 0){
            for(let i = 1; i <= 10; i++){
                console.log(num);
            }
        }else if(num > 0){
            num++
            return num
        }else{
            num -= 2;
            return num
        }
    }
    console.log(multipleTasks(0));
}

// task 7
{
    function callTheLargest(a, b){
        if(a > b){
            console.log(a);
            console.log(b);
        }else{
            console.log(b);
            console.log(a);
        }
    }
    callTheLargest(3, 5)
}

// task 8
{
    function ifEvenPos(num){
        if (num % 2 === 0 && num > 0) {
            num++
            return num;
        } else {
            return num
        }
    }
    console.log(ifEvenPos(6));
}

// task 9
{
    function multiplyTheLargest(a, b){
        if(a > b){
            console.log(a * 10);
            console.log(b);
        }else{
            console.log(b * 10);
            console.log(a);
        }
    }
    multiplyTheLargest(5, 9)
}

// task 10
{
    function countOddEven(num1, num2, num3) {
        let oddCount = 0;
        let evenCount = 0;
    
        function checkNumber(num) {
            if (num % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    
        checkNumber(num1);
        checkNumber(num2);
        checkNumber(num3);
    
        return `juft = ${evenCount}, toq = ${oddCount}`;
    }
    
    console.log(countOddEven(7, 8, 3));
    
}

// misc
let img = document.getElementById('taskimg')
let img1 = document.getElementById('taskimg1')
let img2 = document.getElementById('taskimg2')
let img3 = document.getElementById('taskimg3')
let img4 = document.getElementById('taskimg4')
let img5 = document.getElementById('taskimg5')
let img6 = document.getElementById('taskimg6')
let img7 = document.getElementById('taskimg7')
let img8 = document.getElementById('taskimg8')
let img9 = document.getElementById('taskimg9')

function showCode(){
    img.style.width = "300px"
}
function showCode1(){
    img1.style.width = "300px"
}
function showCode2(){
    img2.style.width = "300px"
}
function showCode3(){
    img3.style.width = "300px"
}

function closeCode(){
    img.style.width = "0"
    img1.style.width = "0"
    img2.style.width = "0"
    img3.style.width = "0"
    img4.style.width = "0"
    img5.style.width = "0"
    img6.style.width = "0"
    img7.style.width = "0"
    img8.style.width = "0"
    img9.style.width = "0"
}