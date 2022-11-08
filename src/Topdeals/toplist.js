import styles14 from './toplist.module.css';


function Toplist(props) {



    return(
        <div>
            <div className={styles14.container}>
                <div className={styles14.wrapper}>
                    <div className={styles14.item}>
                        <div className={styles14.imgarea}>
                            <img src={props.Image} width={130} height={130}></img>
                        </div>
                            <h3>{props.Name}</h3>
                            <p><b>{"Rs.₹"}{props.Price}/-</b></p>
                            <p><b>{props.Offer}{"% Offer"}</b></p>
                        </div>
                </div>
            </div>
        </div>
    );
}


export default Toplist;