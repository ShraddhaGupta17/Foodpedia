import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🥗": "Green Salad",
  "🍿": "Popcorn"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in out database";
    }
    //console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Food Emojis </h1>

      <h3>Have fun with food emojis we like</h3>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> Food Emojis we have </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/**
 * VISER : View -> Interact -> State in Event Handler -> Render
 */
