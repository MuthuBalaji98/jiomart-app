import styles8 from './oil.module.css';
import { useState,useEffect } from 'react';
import OilList from './oilList';

export default function Oils(){

const [products,setProducts] = useState([])

useEffect(() =>{
    fetch('https://6336769b8aa85b7c5d2ce638.mockapi.io/Oil').then((response) =>{
        if(response.ok) {
            return response.json();
    }
    return false;
}).then((data)=>{
    setProducts(data);
})
},[]);

return(
    <div className={styles8.container}>
        <div className={styles8.wrapper}>
            {
                products.map((product)=>{
                    return <OilList key={product.id} name={product.name} price={product.price} offer={product.offer} image={product.image} detail={product}/>
            })
        }
        </div>
    </div>
)
    }