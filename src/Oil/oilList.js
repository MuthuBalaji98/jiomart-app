import styles9 from './oilList.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../context';

export default function OilList(props) {
    const [price, setPrice] = useState(props.price);
    const clickHandler = () => {
        let newPrice = (props.price - (props.offer / 100) * props.price);
        setPrice(newPrice);
    }

    const c=useContext(AppContext)

    const cartHandler = () => {
        c.addCart(props.detail)
    }

    return (

            <div className={styles9.cartarea}>
            <div className={styles9.cartimg}>
                    <img src={props.image}></img>
                </div>
                <div className={styles9.cartcontent}>
                <h2>{props.name}</h2>
                <p>{"Rs."}{price}</p>
                <p><span>{props.offer}{"%Offer"}</span></p>
                </div>
            <button onClick={clickHandler} className={styles9.button}> button
            </button>
            <p><button onClick={cartHandler} className={styles9.cart}>Add to Cart</button></p>
        </div>
    );

}