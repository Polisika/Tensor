'use strict';

class Student {
    constructor(params) {
        this._course = params.course;
        this._fullName = params.fullName;
        this._birthday = params.birthday;
        this._university = params.university;
        this._course = params.course;
        this._photoUrl = params.photoUrl;
        this.rendered = false;
    }

    set fullName(value) {
        this._fullName = value;
    }

    set birthday(value) {
        this._birthday = value;
    }

    set university(value) {
        this._university = value;
    }

    set course(value) {
        this._course = value;
    }

    set photoUrl(value) {
        this._photoUrl = value;
    }

    get fullName() {
        return this._fullName;
    }

    get birthday() {
        return this._birthday;
    }

    get university() {
        return this._university;
    }

    get course() {
        return this._course;
    }

    get photoUrl() {
        return this._photoUrl;
    }

    get age() {
         return parseInt((Date.now() - this._birthday) / 3600 / 24 / 365.25 / 1000);
    }

    get birthDateStr() {
        return this._birthday.getDate() + ' ' + this._birthday.toLocaleString('default', { month: 'long' }) + ', '
            + this.age + ' лет';
    }

    get education() {
        return this._university + ' ' + this.course;
    }

    /**
     * Формирует вёртску блока.
     * @returns (Node)
     */
    render() {
        let div = document.createElement('div');
        div.classList.add('profile');

        let img = document.createElement('img');
        img.classList.add('profile__avatar');
        img.classList.add('profile__avatar_profile');
        img.src = this._photoUrl;
        img.alt = 'Аватар ' + this._fullName;
        div.appendChild(img);

        let name = document.createElement('span');
        name.classList.add('profile__name');
        name.title = this._fullName;
        name.textContent = this._fullName;
        div.appendChild(name);

        let description = document.createElement('span');
        description.classList.add('profile__description');
        description.title = this.education;
        description.textContent = this.education;
        div.appendChild(description);

        return div;
    }
}

const studentsArr = [
    {
        fullName: 'Артем Карасюк',
        birthday: new Date(2000, 5, 2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava01.jpg',
    },
    {
        fullName: 'Елена Оракул-Левенко',
        birthday: new Date(2000, 12,2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava02.jpg',
    },
    {
        fullName: 'Никита Пират',
        birthday: new Date(1999, 8, 2),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava03.jpg',
    },
    {
        fullName: 'Андрей Шеньшин',
        birthday: new Date(2000, 3, 12),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava04.jpg',
    },
    {
        fullName: 'Оксана Укроп',
        birthday: new Date(2006, 9, 23),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava05.jpg',
    },
    {
        fullName: 'Илья Шрам',
        birthday: new Date(2003, 12, 1),
        university: 'НГТУ',
        course: 3,
        photoUrl: 'img/ava06.jpg',
    }
    ];

/**
 * Склеивает верстку из блоков.
 * @param {Student} student
 * @return {String}
 */
function appendStudentBlock (student) {
    const main = document.getElementById('main');
    const elem = student.render();
    main.appendChild(elem);
    return elem;
}

/**
 * Создает узел типа type, с классом class и массива потомков
 * @param {String} type
 * @param {String} selector
 * @param {Array} childs
 * @param {String} content
 * @return {Node}
 */
function createNode(type, selector, content, childs) {
    let node = document.createElement(type);
    node.classList.add(selector);
    node.textContent = content || '';
    if (childs !== undefined)
    {
        childs.forEach((child) => { node.appendChild(child); });
    }
    return node;
}

/**
 * Открывает карточку студента.
 * @param {Student} student
 * @param {Number} index
 * @param {EventTarget} target
 */
function openCard(student, index, target) {
    if (!student.rendered) {
        let div = createNode('div', 'profile-window');
        div.id = index;

        let closer = createNode('div', 'profile-window__closer');
        closer.textContent = 'x';
        div.appendChild(closer);

        let name = document.createElement('span');
        name.textContent = student.fullName;
        name.classList.add('profile-window__name');
        div.appendChild(name);

        let template1 = document.createElement('span');
        template1.classList.add('profile-window__description');
        template1.textContent = 'День рождения';

        let column1 = document.createElement('div');
        column1.appendChild(template1);
        let template = document.createElement('div');
        template.classList.add('profile-window__description');
        template.textContent = 'ВУЗ'
        column1.appendChild(template);

        let wrapper = document.createElement('div');
        wrapper.classList.add('profile-window__wrapper');
        wrapper.appendChild(column1);

        let template_value = document.createElement('div');
        let birthday = document.createElement('span');
        birthday.textContent = student.birthDateStr;
        birthday.classList.add('profile-window__value');
        template_value.appendChild(birthday);

        let education = document.createElement('span');
        education.classList.add('profile-window__value');
        education.textContent = student.education + ' курс';
        template_value.appendChild(education);
        let values = document.createElement('div');
        values.appendChild(template_value);

        wrapper.appendChild(values);

        let spacer = document.createElement('div');
        spacer.classList.add('spacer');
        wrapper.appendChild(spacer);

        let avatar = document.createElement('img');
        avatar.classList.add('profile-window__avatar');
        avatar.src = student.photoUrl;
        avatar.alt = 'Аватар ' + student.fullName;
        wrapper.appendChild(avatar);

        div.appendChild(wrapper);

        closer.addEventListener('click', function (event) {
            document.getElementById(index).remove();
        });

        target.appendChild(div);
    }
}
let index = 1;
studentsArr.forEach((item) => {
    const student = new Student(item);
    let studentBlock = appendStudentBlock(student);
    const thisIndex = index++;
    studentBlock.addEventListener('click', function (event) {
        openCard(student, thisIndex, event.currentTarget);
        student.rendered = true;
    });
})
