import styles from './menu.module.css';
import Menuitem from './menuitems';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';
import Top from '../Topdeals/top';

 

export default function Product() {
    const menu = [
        {
            image : img1,
            list: 'DalsPulses'
        },
        {
            image : img2,
            list: 'AttaFlour'
        },
        {
            image : img3,
            list: 'EdibleOils'
        },
        {
            image : img4,
            list: 'SaltSugarJaggery'
        }
    ]
    return (
        <div>
            {/* <Menulist list={menu[0].list}></Menulist> */}
            <div className={styles.menuContainer}>
                <h1 className={styles.headmenu}>Menu</h1>
                <div className={styles.menuWrapper}>
                    {
                        menu.map((menus) => {
                            return <Menuitem key={menus.list} list={menus.list} image={menus.image}></Menuitem>
                        })
                    }
                </div>
            </div>
            <Top></Top>
        </div>
    );
}