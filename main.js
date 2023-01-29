'use strict';

'use strict';

function calc(operation, a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'It`s not a number';
    } else {
        switch(operation) {
            case 'add':
                return a + b;
            case 'multi':
                return a * b;
            case 'sudtract':
                return a - b;

            default:
                return 'Error';
        }
    }
}

console.log(calc('add', 2, 3));
console.log(calc('multi', 2, 3));
console.log(calc('subtract', 2, 3));