import styles13 from './top.module.css';
import Toplist from './toplist';
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';
import img5 from '../images/image5.png';
import img6 from '../images/image6.png';
import img7 from '../images/image7.png';
import img8 from '../images/image8.png';



function Top() {

    const deals=[
        {
            Image:img1,
            Name:"DalsPulses",
            Price:200,
            Offer:20,
        },
         {
            Image:img2,
            Name:"AttaFlour",
            Price:300,
            Offer:10,
        },
        {
            Image:img3,
            Name:"EdibleOils",
            Price:500,
            Offer:20,
        },
        {
            Image:img4,
            Name:"SaltSugarJaggery",
            Price:300,
            Offer:30,
        },
        {
            Image:img5,
            Name:"Handwash",
            Price:150,
            Offer:10,
        },
        {
            Image:img6,
            Name:"Toothpaste",
            Price:100,
            Offer:5,
        },
        {
            Image:img7,
            Name:"Noodles",
            Price:80,
            Offer:10,
        },
       
        {
            Image:img8,
            Name:"Biscuits",
            Price:50,
            Offer:6,
        }
       
    ]

    return(
        <div>
        <div className={styles13.container}>
            <h1 className={styles13.menu}> Top Deals...!</h1>
            <div className={styles13.wrapper}>
                {
                    deals.map((topdeals) => {
                        return <Toplist Image={topdeals.Image} Name={topdeals.Name} Price={topdeals.Price} Offer={topdeals.Offer}></Toplist>
                    })
                }
            </div>
        </div>
    </div>
    );
}


export default Top;