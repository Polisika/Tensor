import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <span className="header--name" title={this.props.name}><img className="header--logo" alt={"Логотип компании " + this.props.name} src={this.props.img||''} /> {this.props.name||''}</span>
                <div className="header--text">{this.props.description||''}</div>
            </header>
        )
    }
}