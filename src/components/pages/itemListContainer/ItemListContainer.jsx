import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
products;

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // solicitud
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      reject("error");
    });

    //manejo de solicitud
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>{items.length > 0 && <ItemList items={items} />}</>;
};

export default ItemListContainer;
