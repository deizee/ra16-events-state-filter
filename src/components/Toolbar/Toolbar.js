import './Toolbar.css';
import ToolbarItem from "./ToolbarItem/ToolbarItem";
import PropTypes from 'prop-types';

const Toolbar = (props) => {
    if (props.filters.length === 0) {
        return <p>Ошибка: Данные не переданы</p>
    }

    return (
        <div className="Toolbar">
            {props.filters.map(filter => (
                <ToolbarItem
                    key={Math.random()}
                    category={filter}
                    selected={props.selected}
                    onClick={props.onClick}
                />
            ))}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Toolbar;
