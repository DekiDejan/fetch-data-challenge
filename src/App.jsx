import { useState, useEffect } from "react";

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

  const handleClick = (e) => {
    setClicked(e.target.innerText);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  };

  return (
    <>
      <div className="buttons">
        <button className="users" onClick={handleClick}>
          users
        </button>
        <button className="posts" onClick={handleClick}>
          posts
        </button>
        <button className="comments" onClick={handleClick}>
          comments
        </button>
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
