import { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Superaste el stock!",
      });
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <ItemCount
        sumar={sumar}
        restar={restar}
        counter={counter}
        onAdd={onAdd}
      />
    </>
  );
};

export default ItemCountContainer;
