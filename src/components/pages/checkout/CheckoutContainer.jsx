import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ModalCart from "../../common/modalCart/ModalCart";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState({
    title: "",
    content: "",
    orderId: null,
  });

  const { cart, getTotalPrice, cartClear } = useContext(CartContext);
  let totalPrice = getTotalPrice();
  const enviarFormulario = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      setMessage({
        title: "El carrito está vacío.",
        content:
          "Continúa explorando nuestra tienda para encontrar productos increíbles.",
      });
      setOpenModal(true);
      return;
    }

    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7);
      setMessage({
        title: "Gracias por tu compra",
        content: "Tu compra ha sido realizada con exito",
        orderId: res.id,
        deliveryDate: deliveryDate,
      });
      setOpenModal(true);
      cartClear();
    });
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Checkout
        enviarFormulario={enviarFormulario}
        capturar={capturar}
        orderId={orderId}
      />
      <ModalCart
        openModal={openModal}
        setOpenModal={setOpenModal}
        message={message}
      />
    </>
  );
};
