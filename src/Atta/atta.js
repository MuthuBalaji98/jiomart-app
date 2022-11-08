import styles6 from './atta.module.css';
import { useState,useEffect } from 'react';
import AttaList from './attaList';

export default function Atta(){

const [products,setProducts] = useState([])

useEffect(() =>{
    fetch('https://6336769b8aa85b7c5d2ce638.mockapi.io/Atta').then((response) =>{
        if(response.ok) {
            return response.json();
    }
    return false;
}).then((data)=>{
    setProducts(data);
})
},[]);

return(
    <div className={styles6.container}>
        <div className={styles6.wrapper}>
            {
                products.map((product)=>{
                    return <AttaList key={product.id} name={product.name} price={product.price} offer={product.offer} image={product.image} detail={product}/>
            })
        }
        </div>
    </div>
)
    }