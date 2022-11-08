import styles12 from './menuitem.module.css';
// import FruitList from './fruits/fruitlist';
// import Fruits from '../fruits/fruits';
import { useNavigate } from 'react-router-dom';

export default function Menuitem(props) {
    const navigate = useNavigate()
    const menuHandler = ()=>{
        navigate(`/${props.list}`)
    }
    return (
       <div>
            <div className={styles12.menulistContainer} onClick={menuHandler}>
                {/* <h1 className='headmenu'>Menu</h1> */}
                <div className={styles12.menulistWrapper}>
                    <div className={styles12.menuBox}>
                        <button className={styles12.menuButton}>
                            <div className={styles12.imgarea}><img className={styles12.images} src={props.image} width={220} height={250}></img></div>
                            <div className={styles12.listname}>{props.list}</div>
                        </button> 
                    </div>
                </div>
            </div>
            </div>
    );
}