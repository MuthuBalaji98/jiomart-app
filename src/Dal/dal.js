import styles1 from './dal.module.css';
import { useState,useEffect } from 'react';
import DalList from './dalList';

export default function Dal(){

const [products,setProducts] = useState([])

useEffect(() =>{
    fetch('https://6336769b8aa85b7c5d2ce638.mockapi.io/Dals').then((response) =>{
        if(response.ok) {
            return response.json();
    }
    return false;
}).then((data)=>{
    setProducts(data);
})
},[]);

return(
    <div className={styles1.container}>
        <div className={styles1.wrapper}>
            {
                products.map((product)=>{
                    return <DalList key={product.id} name={product.name} price={product.price} offer={product.offer} image={product.image} detail={product}/>
            })
        }
        </div>
    </div>
)
    }