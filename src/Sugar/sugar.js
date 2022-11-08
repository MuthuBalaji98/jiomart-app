import styles10 from './sugar.module.css';
import { useState,useEffect } from 'react';
import SugarList from './sugarList';

export default function Sugar(){

const [products,setProducts] = useState([])

useEffect(() =>{
    fetch('https://6336769b8aa85b7c5d2ce638.mockapi.io/Sugar').then((response) =>{
        if(response.ok) {
            return response.json();
    }
    return false;
}).then((data)=>{
    setProducts(data);
})
},[]);

return(
    <div className={styles10.container}>
        <div className={styles10.wrapper}>
            {
                products.map((product)=>{
                    return <SugarList key={product.id} name={product.name} price={product.price} offer={product.offer} image={product.image} detail={product}/>
            })
        }
        </div>
    </div>
)
    }