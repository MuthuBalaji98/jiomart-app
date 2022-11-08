import './productholder.css';
import { useState,useEffect } from 'react';

export default function Product()

const [products,setProducts] = useState([])

useEffect(() =>{
    fetch().then((response) =>{
        if(response.ok) {
            return response.json();
    }
    return false;
}).then((data)=>{
    setProducts(data);
})
},[]);

return(
    <div className={}>
        <div className={}>
            {
                products.map((product)=>{
                    return <Body key={product.id} name={product.name} price={product.price} offer={product.offer} image={product.image}/>
            })
        }
        </div>
    </div>
)