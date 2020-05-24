'use strict';

import { Student } from './personLib.js';

export class Factory {
    static createStudent(params) {
        return new Student(params);
    }

    static createTeacher(params) {
        return new Teacher(params);
    }

    static createHuman(params) {
        return new Person(params);
    }
}