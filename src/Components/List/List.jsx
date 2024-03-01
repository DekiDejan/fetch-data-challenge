import PropTypes from "prop-types";
import "./List.css";

const List = ({ items, type }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
