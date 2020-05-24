'use strict';

import { Person } from "./person.js";
import { Popup } from "./popup.js";

export class Student extends Person {
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String, course: Number, university: String, group: String }
     */
    constructor(params = {
        fullName: 'Аноним',
        birthday: new Date(),
        photoUrl: 'img/ava06.jpg',
        course: 2,
        university: '',
        group: ''})
    {
        super(params);
        this.course = params.course || 2;
        this.university = params.university || '';
        this.group = params.group || '';
        this.photoUrl = params.photoUrl || 'img/ava06.jpg';
        this.type = 'Студент';
        this.id = Math.floor(Math.random()*10000000000);
    }

    onClick(event) {
        const popup = new Popup(this);
        popup.mount(this.container, 'afterbegin', event);
    }

    render() {
        return `
            <div class="profile">
                <img class="profile__avatar profile__avatar_profile" src="${this.photoUrl}" alt="Аватар ${this.fullName}">
                <span class="profile__name" title="${this.fullName}">${this.fullName}</span>
                <span class="profile__description" title="${this.type}">${this.type}</span>
                <span class="profile__description" title="${this.university} ${this.course} курс">${this.university} ${this.course} курс</span>
            </div>
        `;
    }
}