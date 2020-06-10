import { Person } from "./exportLib.js";
import React from "react";

export class Student extends Person {
    render() {
        return (
            <div className="profile">
                <img className="profile__avatar profile__avatar_profile" src={this.props.img}
                     alt={"Аватар " + this.props.fullName} />
                    <span className="profile__name" title={this.props.title}>{this.props.title}</span>
                    <span className="profile__description" title={this.props.type}>{this.props.type}</span>
                    <span className="profile__description"
                          title={this.props.study}>{this.props.study}</span>
            </div>
        )
    }
}