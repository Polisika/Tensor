'use strict';

class Student {
    constructor(fullName, birthday, university, course, photoUrl) {
        this.fullName = fullName;
        this.birthday = birthday;
        this.university = university;
        this.study_year = course;
        this.photoUrl = photoUrl;
    }

    get age() {
         return parseInt((Date.now() - this.birthday) / 3600 / 24 / 365.25 / 1000);
    }

    get birthDateStr() {
        return this.birthday.toLocaleString('default', { month: 'long' }) + ' ' + this.birthday.getDate() + ', '
            + this.age + ' лет';
    }

    get education() {
        return this.university + ' ' + this.course;
    }

    /**
     * Формирует вёртску блока.
     * @returns (String)
     */
    render() {
        let div = document.createElement('div');
        div.classList.add('profile');

        let img = document.createElement('img');
        img.classList.add('profile__avatar');
        img.src = this.photoUrl;
        img.alt = 'Аватар ' + this.fullName;
        div.appendChild(img);

        let name = document.createElement('span');
        name.classList.add('profile__name');
        name.title = this.fullName;
        name.textContent = this.fullName;
        div.appendChild(name);

        let description = document.createElement('span');
        description.classList.add('profile__description');
        description.title = this.education;
        description.textContent = this.education;
        div.appendChild(description);
    }
}

const studentsArr = [
    {
        fullName: 'Артем Карасюк',
        birthday: new Date(2000, 5, 2),
        university: 'ВУЗ',
        course: 3,
        photoUrl: '/img/ava01.jpg',
    },
    {
        fullName: 'Елена Оракул-Левенко',
        birthday: new Date(2000, 12,2),
        university: 'ВУЗ',
        course: 3,
        photoUrl: 'img/ava02.jpg',
    },
    {
        fullName: 'Никита Пират',
        birthday: new Date(1999, 8, 2),
        university: 'ВУЗ',
        course: 3,
        photoUrl: '/img/ava03.jpg',
    },
    {
        fullName: 'Андрей Шеньшин',
        birthday: new Date(2000, 3, 12),
        university: 'ВУЗ',
        course: 3,
        photoUrl: '/img/ava04.jpg',
    },
    {
        fullName: 'Оксана Укроп',
        birthday: new Date(2006, 9, 23),
        university: 'ВУЗ',
        course: 3,
        photoUrl: '/img/ava05.jpg',
    },
    {
        fullName: 'Илья Шрам',
        birthday: new Date(2003, 12, 1),
        university: 'ВУЗ',
        course: 3,
        photoUrl: '/img/ava06.jpg',
    }
    ];

/**
 * Склеивает верстку из блоков.
 * @param {Student} student
 * @return {String}
 */
function appendStudentBlock (student) {
    return student.render();
}

studentsArr.forEach((item) => {
    const student = new Student(item);
    appendStudentBlock(student);
})
