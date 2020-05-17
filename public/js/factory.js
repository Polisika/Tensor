'use strict';

import {Student, Teacher} from './personLib.js';

export class Factory {
    createStudent(params) {
        return new Student(params);
    }

    createTeacher(params) {
        return new Teacher(params);
    }

    createHuman(params) {
        return new Person(params);
    }
}