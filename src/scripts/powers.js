



document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);



function flightHandlerFunction(event) {

    document.querySelector("#flight").classList.add('enabled');
    document.querySelector("#flight").classList.remove('disabled');

}

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);



function mindreadingHandlerFunction(event) {

    document.querySelector("#mindreading").classList.add('enabled');
    document.querySelector("#mindreading").classList.remove('disabled');

}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);



function xrayHandlerFunction() {

    document.querySelector("#xray").classList.add('enabled');
    document.querySelector("#xray").classList.remove('disabled');

}


document.querySelector("#activate-all").addEventListener("click", allaHandlerFunction);



function allaHandlerFunction() {

   


    let list =  document.querySelectorAll(".power");

    for (let i = 0; i < list.length; i++) {
        list[i].classList.add('enabled');
        list[i].classList.remove('disabled');
    }

    

}



document.querySelector("#deactivate-all").addEventListener("click", alldHandlerFunction);



function alldHandlerFunction() {

    let list =  document.querySelectorAll(".power");

    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('enabled');
        list[i].classList.add('disabled');
    }

    

}


    document.querySelector("body").addEventListener("click", function(event) {
        console.log("You clicked on the body of the DOM");
        event.target.classList.add('MyClass');
    })

    /*

    document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');

    */


