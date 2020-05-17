'use strict';

import {Student, Teacher, Factory} from './personLib.js';

export class School {
    constructor() {
        this._factory = new Factory();
        this._students = [];
        this._teachers = [];
    }

    get students() {
        return this._students;
    }

    get teachers() {
        return this._teachers;
    }

    /**
     * Зачисляет студента или преподавателя в школу.
     * @param {Student | Teacher}  person
     */
    add(person) {
        switch (person.type) {
            case "Преподаватель":
                this.teachers.push(person);
                break;
            case "Студент":
                this.students.push(person);
                break;
            default:
                throw "В школу могут быть зачислены либо студенты, либо преподаватели";
        }
    }

    enrollStudent(params) {
        this.students.push( this._factory.createStudent(params) );
    }

    enrollTeacher(params) {
        this._teachers.push( this._factory.createTeacher(params) );
    }

    findStudent(fullName) {
        return this._students.filter( student => student.fullName === fullName );
    }

    /**
     * Добавляет верстку в DOM.
     * @param {Node} node
     * @return {Node} Добавленный элемент.
     */
    appendToDom (node) {
        this.students.forEach( student => node.appendChild( student.render() ) );
        this.teachers.forEach( teacher => node.appendChild( teacher.render() ) );
    }
}