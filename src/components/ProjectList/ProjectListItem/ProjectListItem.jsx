import { Component } from "react";
import './ProjectListItem.css';

export default class ProjectListItem extends Component {
    render() {
        return (
            <div className="ProjectList_card">
                <img src={this.props.img} alt={this.props.category}/>
            </div>
        )
    }
}
