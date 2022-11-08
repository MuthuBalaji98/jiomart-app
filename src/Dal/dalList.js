import styles2 from './dalList.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import AppContext from '../context';

export default function DalList(props) {
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

            <div className={styles2.cartarea}>
            <div className={styles2.cartimg}>
                    <img src={props.image}></img>
                </div>
                <div className={styles2.cartcontent}>
                <h3>{props.name}</h3>
                <p>{"Rs."}{price}</p>
                <p><span>{props.offer}{"%Offer"}</span></p></div>
            <button onClick={clickHandler} className={styles2.button} > button
            </button>
            <p><button onClick={cartHandler} className={styles2.cart} >Add to Cart</button></p>
            </div>
    );

}