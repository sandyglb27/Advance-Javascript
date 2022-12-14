/* ***********  Nested Function Scope  ************

let a=10
function outer (){
    let b= 20
    function inner(){
        let c=30
           console.log(a,b,c)
    }

    inner()

}
outer() */


/*function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
     return inner
}
outer()
outer()  */

/* ************ Closure ************* */


/* function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
     return inner
}

const fn= outer ()
fn()
fn()  */


/* ************* Function Currying ************ */


function sum(a,b,c){
    return a+b+c
}

console.log(sum(2,3,5))

// sum(2,3,5)  sum(2) (3) (5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedsum = curry(sum)
console.log(curriedsum(2)(3)(5))