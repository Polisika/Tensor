'use strict';

import {Person} from './person.js';

export class Teacher extends Person {
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String, university: String, position: String, faculty: String }
     */
    constructor(params) {
        super(params);
        this._university = params.university;
        this._position = params.position;
        this.type = 'Преподаватель';
        this._faculty = params.faculty;
    }

    set faculty(value) {
        this._faculty = value || 'ФПМИ';
    }

    set university(value) {
        this._university = value || 'НГТУ';
    }

    set position(value) {
        this._position = value || 'Ассистент';
    }

    get faculty() {
        return this._faculty;
    }

    get university() {
        return this._university;
    }

    get position() {
        return this._position;
    }

    toString() {
        return super.toString() + `Университет: ${this.university}\n` + `Должность: ${this.position}\n`
            + `Факультет: ${this.faculty}\n`;
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

        let about = document.createElement('span');
        about.classList.add('profile__description');
        about.title = this.university + ' ' + this.position;
        about.textContent = this.university + ' ' + this.position;
        div.appendChild(about);
        return div;
    }
}