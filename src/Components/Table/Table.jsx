import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              {Object.entries(item).map(([key, value]) => {
                return <td key={key}>{JSON.stringify(value)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  items: PropTypes.array,
};

export default Table;
