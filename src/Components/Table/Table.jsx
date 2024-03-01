import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {/* <tr>
          {items &&
            Object.keys(items[0]).map((key) => {
              return <th key={key}>{key.toUpperCase()}</th>;
            })}
        </tr> */}
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
