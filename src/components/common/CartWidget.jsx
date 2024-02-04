import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = ({ itemCount }) => {
    return (
        <div  style={{ display: 'flex'}}>
            <span style={{ marginRight: "4px"}}>{itemCount}</span>
            <ShoppingCartIcon color= "inherit" />
        </div>
)
}

export default CartWidget