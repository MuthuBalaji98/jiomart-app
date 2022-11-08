import styles4 from './cart.module.css';
import cartList from './cartList';
function Cart(props){

    return(
        <div>
            <div className={styles4.cartarea}>
            <div className={styles4.cartimg}>
                    <img src={props.image}></img>
                </div>
                <div className={styles4.cartcontent}>
                <h2>{props.name}</h2>
                <p>{"Rs."}{props.price}</p>
                <p><span>{props.offer}{"%Offer"}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cart;