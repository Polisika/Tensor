'use strict';

import { Component } from "./component.js";

export class Popup extends Component {
    constructor(person) {
        super();
        this.person = person;
    }

    render(event) {
        return `
        <div class="popup" onclick="event.stopPropagation();" style="left: ${event.screenX || 0}px; top: ${event.screenY || 0}px">
            <center>
                <div class="popup__header"> ${this.person.fullName}
                    <span class="spacer"></span>
                    <span id="${this.person.id}" title="Закрыть">X</span>
                </div>
                <div class="popup__content">
                    <img height="300" width="300" class="card__img" src="${this.person.photoUrl}" alt="Аватар ${this.person.fullName}">
                </div>
            </center>
        </div>
        `;
    }

    onClick() {
        this.unmount();
    }

    afterMount() {
        document.getElementById(this.person.id).addEventListener('click', this.onClick.bind(this));
    }
}