'use strict'

import {Person} from './person.js';

export class Student extends Person {
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String, course: Number, university: String, group: String }
     */
    constructor(params) {
        super(params);
        this._course = params.course;
        this._university = params.university;
        this._group = params.group;
        this.type = 'Студент';
    }

    set group(value) {
        this._group = value || 'ПМ-83';
    }

    set university(value) {
        this._university = value || 'НГТУ';
    }

    set course(value) {
        this._course = value || 1;
    }

    get course() {
        return this._course;
    }

    get university() {
        return this._university;
    }

    get group() {
        return this._group;
    }

    toString() {
        return super.toString() + `Университет: ${this.university}\n` + `Курс: ${this.course}\n`
            + `Группа: ${this.group}\n`;
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
        description.title = this.type;
        description.textContent = this.type;
        div.appendChild(description);

        let education = document.createElement('span');
        education.classList.add('profile__description');
        education.title = this.university + ' ' + this.course + ' курс';
        education.textContent = education.title;
        div.appendChild(education);

        return div;
    }
}