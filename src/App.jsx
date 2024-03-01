import { useState, useEffect } from "react";
import Button from "./Components/Button/Button.jsx";
import Table from "./Components/Table/Table.jsx";
import List from "./Components/List/List.jsx";

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
        <Table items={items} />

        {/* First variation of the challenge, using unordered list to render data */}
        {/* <List items={items} /> */}
      </div>
    </>
  );
}

export default App;
