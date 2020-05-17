'use strict';

import {Student, Teacher, Factory} from './personLib.js';
import {School} from './school.js';

// проинициализируем фабрику
const factory = new Factory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
const studentsArr = [
    {
        fullName: 'Артем Карасюк',
        birthday: new Date(2000, 5, 2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava01.jpg',
        group: 'ПМ-83'
    },
    {
        fullName: 'Елена Оракул-Левенко',
        birthday: new Date(2000, 12,2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava02.jpg',
        group: 'ПМ-81'
    },
    {
        fullName: 'Илья Пират',
        birthday: new Date(1999, 8, 2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava03.jpg',
        group: 'ЭФ-85'
    },
    {
        fullName: 'Андрей Шеньшин',
        birthday: new Date(2000, 3, 12),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava04.jpg',
        group: 'Э-83'
    },
    {
        fullName: 'Оксана Укроп',
        birthday: new Date(1997, 9, 23),
        university: 'НГТУ',
        course: 6,
        photoUrl: 'img/ava05.jpg',
        group: 'ИВТ-33'
    },
    {
        fullName: 'Илья Шрам',
        birthday: new Date(2003, 12, 1),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava06.jpg',
        group: 'ПМ-83'
    }
];
const teachersArr = [
    {
        fullName: "Петров Юрий",
        birthday: new Date(1960, 12, 1),
        photoUrl: 'img/ava06.jpg',
        university: 'НГТУ',
        position: 'Доцент',
        faculty: 'ФПМИ'
    },
    {
        fullName: "Бекарев Борис",
        birthday: new Date(1990, 1, 3),
        photoUrl: 'img/ava01.jpg',
        university: 'НГТУ',
        position: 'Декан',
        faculty: 'ФПМИ'
    }
];

studentsArr.forEach( student => school.add( factory.createStudent(student) ) );
teachersArr.forEach( teacher => school.add( factory.createTeacher(teacher) ) );

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendToDom(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше