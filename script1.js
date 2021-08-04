// через if
let lang = prompt('Выберите язык!', 'ru or en');

let arrRussia = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arrEnglish = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


if (lang === 'ru') {
  console.log(arrRussia);
} else if (lang === 'en') {
  console.log(arrEnglish);
} else {
  console.log('упс');
};

// через switch
switch (lang) {
  case 'ru':
    console.log(arrRussia);
    break;
  case 'en':
    console.log(arrEnglish);
    break;
  default:
    console.log('упс');
}

// через многомерный массив
let arr =[
  [{'ru':['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']}],
  [{'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}]
]

console.log(arr[0]);
console.log(arr[1]);

// 2-ое задание

let nameYou = prompt('Ваше имя?', 'Артем или Максим');
let namePerson = (nameYou === 'Артем') ? 'директор' : 
    (nameYou === 'Максим') ? 'преподаватель' : 'студент';
  
console.log(namePerson);    