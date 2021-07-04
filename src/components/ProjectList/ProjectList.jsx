import { Component } from "react";
import './ProjectList.css';
import ProjectListItem from "./ProjectListItem/ProjectListItem";

export default class ProjectList extends Component {
    render() {
        return (
            <div className="ProjectList">
                {this.props.cards.map((card) => (
                    <ProjectListItem key={Math.random()} img={card.img} category={card.category}/>
                ))}
            </div>
        )
    }
}