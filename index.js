const addition=(a,b)=>{
return(
    console.log("addition"),
    console.log(a+b)
)
}
addition(20,30)

const subtraction=(a,b)=>{
    return (
        console.log("subtract"),
        console.log(a-b)
    )
}
subtraction (30,20)

const multiplication=(a,b)=>{
    return (
        console.log("multiply"),
        console.log(a*b)
    )
}
multiplication(10,20)

const division=(a,b)=>{
    return (
        console.log("division"),
        console.log(a/b)
    )
}
division(10,2)

const modulus=(a,b)=>{
    return (
        console.log("modulus"),
        console.log(a%b)
    )
}
modulus(10,2)

const exponential=(a,b)=>{
    return(
        console.log("exponential"),
        console.log(a**b)
    )
}
exponential(2,3)
const add=(a,b)=>{
return (
    console.log("assignment add"),
    console.log(a+=b)
)
}
add(5,10)

const subtract=(a,b)=>{
    return (
        console.log("assignment subtract"),
        console.log(a-=b)
    )
    }
    subtract(15,10)

    
const divide=(a,b)=>{
    return (
        console.log("assignment divide"),
        console.log(a/=b)
    )
    }
    divide(10,2)

    const multiply=(a,b)=>{
        return (
            console.log("assignment multiply"),
            console.log(a*=b)
            )
    }
    multiply (10,2)

    const exponent=(a,b)=>{
        return (
            console.log("assignment exponent"),
            console.log(a**=b)
            )
    }
    exponent (10,2)

    const modulo=(a,b)=>{
        return(
            console.log("assignment modulo"),
            console.log(a%=b)
        )
    }
    modulo(10,2)
    const equalto=(a,b)=>{
        return (
            console.log("equal operator"),
            console.log(a===b)
        )
    }
    equalto(2,3)
        const notequalto=(a,b)=>{
        return (
            console.log("notequal operator"),
            console.log(a!==b)
        )
    }
    notequalto(2,3)

    function greet(name) {
        console.log("Hello " + name);
    }
    greet("Boopesh");

    function compare(a, b) {
        if (a > b) {
            console.log(-1);
        } else if (a < b) {
            console.log(1);
        }
        else{
            console.log(0);
        }
    }
    compare(10,20)

    function addfun() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        console.log(sum);
    }
    addfun(3,4)

    function showMessage(message) {
        console.log(message);
    }
    let result = showMessage('Hello');
    console.log('Result:', result);

    function genRandom(min, max) {
        return Math.floor(Math.random() * max) + min
      }
      
      console.log(genRandom(1,10))

      function reverseNum(num) {
        var reverse = 0;
        while(num != 0)
        {
          reverse = reverse * 10;
          reverse = reverse + num%10;
          num = Math.trunc(num/10);
        }
        return reverse;
      }
      
      console.log(reverseNum(123)) 


    
