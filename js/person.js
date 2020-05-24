'use strict';

import {Component} from "./component.js";

export class Person extends Component{
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String }
     */
    constructor(params = { fullName: 'Аноним', birthday: new Date(), photoUrl: 'img/ava06.jpg' }) {
        super(params);
        this.fullName = params.fullName;
        this.birthday = params.birthday;
        this.photoUrl = params.photoUrl;
        this.type = 'Человек';
    }

    /**
     * @returns {number} Количество лет
     */
    get age() {
        return parseInt((Date.now() - this._birthday) / 3600 / 24 / 365.25 / 1000);
    }

    /**
     * Возвращает строку формата: "день(Число) месяц"
     * @returns {string}
     */
    get birthDateStr() {
        return this.birthday.getDate() + '.' + this.birthday.toLocaleString('default', { month: 'long' });
    }

    toString() {
        function year(age) {
            let res = (age || 0) % 10;
            if (res === 0 || res >= 5) return 'лет';
            if (res === 1) return 'год';
            if (res <= 4) return 'года';
        }
        return `${this.type}\n` + `ФИО: ${this.fullName}\n`
            + `День рождения: ${this.birthDateStr}, ${this.age} ${year(this.age)}\n`
            + `Ссылка на фото: ${this.photoUrl}\n`;
    }
}