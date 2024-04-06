import { useSelector } from "react-redux"
import ItemList from "./ItemList";
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 mx-auto">
                <ItemList items={cartItems} />
                <button className="p-2 m-2 bg-black text-white font-bold rounded-md"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && <h1 className="m-3 p-2 text-lg font-medium">Cart is Empty!</h1>}
            </div>
        </div>
    )
}

export default Cart;