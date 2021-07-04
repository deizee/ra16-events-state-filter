import { Component } from "react";
import './ToolbarItem.css';

export default class ToolbarItem extends Component {
    render() {
        let classSelected = 'Toolbar_button';
        if (this.props.selected === this.props.category) {
            classSelected += ' Toolbar_button-selected';
        }

        return (
            <div
                className={classSelected}
                onClick={this.props.onClick}
                data-filter={this.props.category}
            >
                {this.props.category}
            </div>
        )
    }
}