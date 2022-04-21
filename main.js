// Задание 1

for (let i = 10; i < 50; i= i + 2) {
    console.log(i);
};

// Задание 2 

const me = {
    firstName: 'Vladislav',
    lastName: 'Dynin',
    age: 21,
    pet: true
};
console.log(me);

// Задание 3

const array = ['я в Симбирск,','в трактире.','с утра','В ту же ночь','Я остановился','для закупки', 'что и было поручено Савельичу.','приехал,','где должен был','нужных вещей,','отправился по лавкам.','пробыть сутки','Савельич'];

array[0] = 'В ту же ночь';
array[1] = 'приехал,';
array[2] = 'я в Симбирск,';
array[3] = 'где должен был';
array[4] = 'пробыть сутки';
array[5] = 'для закупки';
array[6] = 'нужных вещей,';
array[7] = 'что и было поручено Савельичу.';
array[8] = 'Я остановился';
array[9] = 'в трактире.';
array[10] = 'Савельич';
array[11] = 'с утра';
array[12] = 'отправился по лавкам.';

let result = array;
console.log(result);

// Задание 4

const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

const human = fullName('Vladislav', 'Dynin');
console.log(human);

// Задание 5

let x = 21;
while(x < 67) {
    console.log(x);
    x = x + 2;
}
