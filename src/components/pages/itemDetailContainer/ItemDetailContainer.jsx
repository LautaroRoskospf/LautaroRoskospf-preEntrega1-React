import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { Spiner } from "../../common/spiner/Spiner";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantity } = useContext(CartContext);
  const initial = getTotalQuantity(id);

  useEffect(() => {
    setIsLoading(true);
    let collectionProducts = collection(db, "products");
    let refDocument = doc(collectionProducts, id);
    getDoc(refDocument)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <Spiner />
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
