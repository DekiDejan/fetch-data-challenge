import { useState, useEffect } from "react";
import Button from "./Components/Button/Button.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState("");
  const url = `https://jsonplaceholder.typicode.com/${type}`;

  useEffect(() => {
    const fetchItems = async () => {
      if (type !== "") {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchItems();
  }, [type]);

  return (
    <>
      <div className="buttons">
        <Button value="users" setType={setType} />
        <Button value="posts" setType={setType} />
        <Button value="comments" setType={setType} />
      </div>
      <div className="items">
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

        {/* First variation of the challenge, using unordered list to render data */}
        {/* <ul>
          {items.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}

export default App;
