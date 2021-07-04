import { Component } from "react";
import './Toolbar.css';
import ToolbarItem from "./ToolbarItem/ToolbarItem";

export default class Toolbar extends Component {
    render() {
        return (
            <div className="Toolbar">
                {this.props.filters.map(filter => (
                    <ToolbarItem
                        key={Math.random()}
                        category={filter}
                        selected={this.props.selected}
                        onClick={this.props.onClick}
                    />
                ))}
            </div>
        )
    }
}