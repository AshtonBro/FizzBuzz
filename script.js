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

//? Solution #4
const array = [];
for (let i = 1; i < 100; i++) {
    array.push(i);
}

const result = array.map((num) => {
    num % 3 === 0 && num % 5 === 0 ? console.log('FizzBuzz: ', num) :
        num % 3 === 0 ? console.log('Fizz: ', num) :
        num % 5 === 0 ? console.log('Buzz: ', num) : num;
});

// //? OOP Solution #5
const MAX_NUM = 100;

class Tag {
    constructor(_value) {
        this.value = _value;
    }
}

class Printer {
    constructor(_context) {
        this.context = _context;
    }

    print() {
        console.log(this.context.value);
    }
}

class DividerCondition {
    constructor(_divider) {
        this.divider = _divider;
    }

    isTruthy(num) {
        return num % this.divider === 0;
    }
}

class AndStrategy {
    constructor(_contitionsOrStrategies) {
        this.contitionsOrStrategies = _contitionsOrStrategies;
    }

    isTruthy(num) {
        for (let i in this.conditions) {
            if (!this.conditions[i].isTruthy(num)) {
                return false;
            }
        }
        return true;
    }
}

class TagNumRule {
    constructor(_tag, _strategy) {
        this.strategy = _strategy;
        this.tag = _tag;
    }

    isSuccess(sum) {
        return this.strategy.isTruthy(sum);
    }
}

class TagNumRulesCollection {
    constructor(_tags) {
        this.tags = _tags;
    }

    find(num, defaultValue) {
        for (let i in this.tags) {
            if (this.tags[i].isSuccess(num)) {
                return this.tags[i].tag;
            }
        }
        return defaultValue;
    }
}

const numTags = new TagNumRulesCollection([
    new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DividerCondition(3), new DividerCondition(5)])),
    new TagNumRule(new Tag('Fizz'), new AndStrategy([new DividerCondition(3)])),
    new TagNumRule(new Tag('Buzz'), new AndStrategy([new DividerCondition(5)]))
]);

for (let i = 1; i < MAX_NUM; i++) {
    new Printer(numTags.find(i, new Tag(i))).print();
}