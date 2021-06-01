output = document.getElementById("numero");

for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output.innerHTML += "<br/> FizzBuzz";
    } else if (i % 3 === 0) {
        output.innerHTML += "<br/> Fizz";
    } else if (i % 5 === 0) {
        output.innerHTML += "<br/> Buzz";
    } else {
        output.innerHTML += "<br/>" + i;
    }

}