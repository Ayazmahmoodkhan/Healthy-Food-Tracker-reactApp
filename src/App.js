import React, { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMassage from "./components/ErrorMassage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  //let fooditems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  let [fooditems, setfooditems] = useState([]);
  // const [textToShow, setTextToShow] = useState("Food Items Entered By User");
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let value = event.target.value;
      event.target.value = "";
      let newItems = [...fooditems, value];
      setfooditems(newItems);
    }
    //setTextToShow(`Food Items Entered By User: ${value}`);
  };
  const handleRemoveItem = (item) => {
    setfooditems((newItems) => newItems.filter((ele) => ele !== item));
  };

  return (
    <>
      <Container>
        <Container>
          <h1 className="heading">Healthy Food</h1>
        </Container>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* <p className="userText">{textToShow}</p> */}
        <ErrorMassage items={fooditems} />
        <FoodItems items={fooditems} handleRemoveItem={handleRemoveItem} />
      </Container>
    </>
  );
}

export default App;
