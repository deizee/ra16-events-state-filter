import './ToolbarItem.css';
import PropTypes from "prop-types";

const ToolbarItem = (props) => {
    let classSelected = 'Toolbar_button';
    if (props.selected === props.category) {
        classSelected += ' Toolbar_button-selected';
    }

    return (
        <div
            className={classSelected}
            onClick={props.onClick}
            data-filter={props.category}
        >
            {props.category}
        </div>
    )
}

ToolbarItem.propTypes = {
    category: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ToolbarItem;
