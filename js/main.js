'use strict';

import { Factory } from './factory.js';
import { Header } from "./header.js";

const header = new Header();
header.mount(document.body);

const studentArr = [ Factory.createStudent({
    fullName: 'Женя Серова',
    photoUrl: 'img/ava03.jpg',
    university: 'Угату',
    birthday: new Date('1998-11-13'),
}),
    Factory.createStudent({
        fullName: 'Артем Карасюк',
        photoUrl: 'img/ava01.jpg',
        university: 'НГТУ',
        birthday: new Date('1998-11-13'),
    }),
    Factory.createStudent({
        fullName: 'Евгения Романова',
        photoUrl: 'img/ava02.jpg',
        university: 'Угату',
        birthday: new Date('1998-11-13'),
    }),
    Factory.createStudent({
        fullName: 'Георгий Лаб',
        photoUrl: 'img/ava06.jpg',
        university: 'Угату',
        birthday: new Date('1998-11-13'),
    }),
];
studentArr.forEach((s) => s.mount(document.getElementById('main')));