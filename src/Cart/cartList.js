import styles5 from './cartList.module.css';
import { useContext,useEffect } from "react";
import AppContext from "../context";
import Cart from "./cart";

function CartItem(){
    const prop = useContext(AppContext);

    useEffect(()=>{
        console.log(prop.cart);
    },[])
    return(
        <div>
            <div className={styles5.cartcontainer}>
                <div className={styles5.cartwrapper}>
            {
                prop.cart.map(
                    (a)=>{
                        return(
                            <Cart key={a.id}  image={a.image} name={a.name} price={a.price} offer={a.offer} ></Cart>
                        )
                    }
                )
            }
            </div>
            </div>
        </div>
    )
}

export default CartItem;