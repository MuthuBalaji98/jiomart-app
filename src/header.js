import './header.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {BsList} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import{useNavigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {useContext} from 'react';
import AppContext from './context';


function Header(){
    const nav=useNavigate();
    const itemno=useContext(AppContext);
    const d =itemno.cart;



    return(
        <div>
        <header>
            <div className="container">
                <div className="wrapper">
                        <h2 className='nav'><BsList/>JioMart</h2>
                        <input type="text" className="search-input" placeholder="Search"></input>
                        <a href="#" className='nav'><BsFillPersonFill/>Sign-in/Sign-up</a>
                        <div className='nav'><AiOutlineShoppingCart onClick={()=>{
                            nav('/cart')
                        }} size="30px"/>Cart<span>{d.length}</span></div>
                </div>
                <div className="category">
                    <div className="category-wrapper">
                        <h3 className="category"><GoLocation/>Deliver to</h3>
                        <select className="category">
                            <option value="Groceries" selected>Groceries</option>
                            <option value="Staples">Staples</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Beverages">Beverages</option>
                        </select>
                        <select className="category">
                            <option value="" selected>Fruits</option>
                            <option value="Apples">Apples</option>
                            <option value="Pineapple">Pineapple</option>
                            <option value="Orange">Orange</option>
                            <option value="Dates">Dates</option>
                        </select>
                        <select className="category">
                            <option value="Home&Kitchen" selected>Home&Kitchen</option>
                            <option value="Dining">Dining</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="Toys">Toys</option>
                        </select>
                        <select className="category">
                            <option value="Fashion" selected>Fashion</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Boys">Boys</option>
                            <option value="Girls">Girls</option>
                        </select>
                        <select className="category">
                            <option value="Electronics" selected>Electronics</option>
                            <option value="Mobiles">Mobiles&Tablets</option>
                            <option value="Camera">Camera</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                </div>
                </div>
                </div>
        </header>
        </div>
    )
}

export default Header;