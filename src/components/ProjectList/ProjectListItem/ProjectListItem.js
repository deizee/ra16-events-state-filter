import './ProjectListItem.css';
import PropTypes from "prop-types";

const ProjectListItem = (props) => {
    return (
        <div className="ProjectList_card">
            <img src={props.img} alt={props.category} />
        </div>
    )
}

ProjectListItem.propTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default ProjectListItem;

