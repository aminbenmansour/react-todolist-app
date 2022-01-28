import { CartItemType } from '../../App';
import { Wrapper } from './Cart.styles';
import CartItem from '../CartItem/CartItem';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

function Cart({ cartItems, addToCart, removeFromCart }: Props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const calculateTotal = (items: CartItemType[]) => (
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    );

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            { /* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
}

export default Cart;