import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ModalCart = ({ openModal, setOpenModal, message }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    setOpenModal(false);
    navigate("/");
  };

  return (
    <Dialog open={openModal} onClose={closeModal}>
      <DialogTitle>{message.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message.content}</DialogContentText>
        {message.orderId && (
          <DialogContentText>
            Tu numero de seguimiento es: {message.orderId}
          </DialogContentText>
        )}
        {message.deliveryDate && (
          <DialogContentText>
            Fecha estimada de entrega:{" "}
            {message.deliveryDate.toLocaleDateString()}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCart;
