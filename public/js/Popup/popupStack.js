'use strict';

import { Factory, Component } from "../exportLib.js"

export class PopupStack extends Component {
    constructor(person) {
        super();
        this.stack = [];
        this.person = person;
    }

    openPopup(event) {
        if (this.stack.length === 0) {
            const popup = Factory.createPopup(this.person);
            popup.mount(this.person.container, 'afterbegin', event);
            this.stack.push(popup);
            document.getElementById(this.person.id).addEventListener('click', this.removePopup.bind(this));
        }
    }

    removePopup() {
        // Так как в стеке только один элемент, то вынимаем него
        const popup = this.stack.pop();
        if (!popup) throw "В стеке нет popup'ов.";

        popup.unmount();
        this.stack.length = 0;
    }
}