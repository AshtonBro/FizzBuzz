"use script";

//? Solution #1

for (let i = 1; i < 100; i++) {
    console.log(i);

    if (i % 3 === 0) {
        console.log('Fizz');
    }
    if (i % 5 === 0) {
        console.log('Buzz');
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
}

//? Solution #2

const fizzBuzz = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return true;
    }
    return false;
};

const fizz = (n) => {
    if (n % 3 === 0) {
        return true;
    }
    return false;
};

const buzz = (n) => {
    if (n % 5 === 0) {
        return true;
    }
    return false;
};

for (let i = 1; i < 100; i++) {
    switch (true) {
        case fizzBuzz(i):
            console.log('FizzBuzz', i);
            break;
        case fizz(i):
            console.log('Fizz', i);
            break;
        case buzz(i):
            console.log('Buzz', i);
            break;
    }
}

//? Slution #3

const fizzBuzzMehtod = (n, w) => (num) => num % n === 0 ? w : '';
const fizzMethod = fizzBuzzMehtod(3, 'Fizz');
const buzzMethod = fizzBuzzMehtod(5, 'Buzz');

[...Array(99).keys()].map(i => i + 1).forEach(i => console.log(fizzMethod(i) + buzzMethod(i) || i));