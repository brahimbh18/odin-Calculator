var op, a, b;
var opCount = 0;
const ops = ['+', '-', 'x', '÷'];
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) return 'ERROR!';
    return a / b;
}

const operate = function(op, a, b) {
    switch (op) {
        case  '+':
            return add(a, b);
        case  '-':
            return subtract(a, b);
        case  'x':
            return multiply(a, b);
        case  '÷':
            return divide(a, b);

    }
}

var btns = Array.from(document.querySelectorAll(".button"));
btns.forEach(btn => btn.addEventListener("click", () => btnCLicked(btn)));

const btnCLicked = function (btn) {
    var screen = document.querySelector('.screen');
    if (btn.id === "c" || btn.id === "del")
    {
        (btn.id === "c") ? screen.innerHTML = "0" : screen.innerHTML = screen.innerHTML.slice(0, -1);
        return;
    }
    if (ops.includes(btn.id) && opCount === 0) {
        op = btn.id;
        a = Number(screen.innerHTML);
        screen.innerHTML = "";
        opCount++;
        return;
    };
    if (ops.includes(btn.id) && opCount > 0) {
        a = operate(op, a, Number(screen.innerHTML));
        console.log(a);
        op = btn.id;
        screen.innerHTML = "";
        return;
    };
    if (btn.id === "=") {
        b = Number(screen.innerHTML);
        screen.innerHTML = operate(op, a, b);
        opCount = 0;
        a, b = 0;
        return;
    }
    if (btn.id === '.' && screen.innerHTML.indexOf('.') != -1) return;
    (screen.innerHTML === "0") ? screen.innerHTML = btn.id : screen.innerHTML += btn.id;

    
}
