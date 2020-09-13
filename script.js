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