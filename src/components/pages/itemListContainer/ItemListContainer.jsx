import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "../../common/spinner/spinner";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (category) {
      let productsCollectionFilter = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFilter;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayConId = res.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          };
        });
        setProducts(arrayConId);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return <>{isLoading ? <Spinner /> : <ItemList products={products} />}</>;
};

export default ItemListContainer;
