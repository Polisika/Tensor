import React from "react";

export class Person extends React.Component{
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
        return `${this.type}\nФИО: ${this.fullName}\n`
            + `День рождения: ${this.birthDateStr}, ${this.age} ${year(this.age)}\n`
            + `Ссылка на фото: ${this.photoUrl}\n`;
    }
}