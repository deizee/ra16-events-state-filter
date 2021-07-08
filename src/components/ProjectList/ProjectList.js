import './ProjectList.css';
import ProjectListItem from "./ProjectListItem/ProjectListItem";
import Toolbar from "../Toolbar/Toolbar";
import PropTypes from "prop-types";

const ProjectList = (props) => {
    if (props.cards.length === 0) {
        return <p>Ошибка: Данные не передались</p>
    }

    return (
        <div className="ProjectList">
            {props.cards.map((card) => (
                <ProjectListItem key={Math.random()} img={card.img} category={card.category} />
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    cards: PropTypes.array.isRequired
}

export default ProjectList;
