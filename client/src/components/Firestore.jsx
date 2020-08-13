import React from "react";

import firebase from "../firebase/firebase";

export default function Firestore() {
  const database = firebase.database();
  const cartRef = database.ref("cart");
  const itemsRef = database.ref("items");

  const newItem = {
    name: "Canon R6",
    price: 4000,
  };

  const newItem2 = {
    name: "Canon R5",
    price: 3000,
  };

  const addItem = () => cartRef.push(newItem);
  const editItem = () => cartRef.set(newItem2);

  const getItem = () => {
    itemsRef.once("value").then((snapshot) => {
      const items = snapshot.val() || "Not found";
      console.log(items);   // returns an object of all items
    });
  };

  const getItemSnapshot = () => {
    itemsRef.on("value", (snapshot) => {
      console.log(snapshot.val());
    });
  };

  return <button onClick={getItem}>Get</button>;
}
