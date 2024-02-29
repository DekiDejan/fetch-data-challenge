import { useState, useEffect } from "react";
import Button from "./Components/Button/Button.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState("");
  const url = `https://jsonplaceholder.typicode.com/${clicked}`;

  useEffect(() => {
    clicked !== "" &&
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [clicked]);

  return (
    <>
      <div className="buttons">
        <Button value="users" setClicked={setClicked} />
        <Button value="posts" setClicked={setClicked} />
        <Button value="comments" setClicked={setClicked} />
      </div>
      <div className="items">
        <ul>
          {items.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
