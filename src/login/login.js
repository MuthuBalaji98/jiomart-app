import styles12 from './login.module.css';
import { useState } from 'react';

function Login({ login, error }) {

    const [userdata, setData] = useState({ name: "", email: "", password: "" })

    const submitHandler = (s) => {
        s.preventDefault();
        login(userdata);
    }

    const nameHandler = (s) => {
        setData({ ...userdata, name: s.target.value })
    }

    const mailHandler = (s) => {
        setData({ ...userdata, email: s.target.value });
    }

    const passwordHandler = (s) => {
        setData({ ...userdata, password: s.target.value });
    }




    return (
        <div>
            <form className={styles12.login} onSubmit={submitHandler}>
                <h1 className={styles12.h1}>JioMart...!</h1>
                {(error != "") ? (<div className={styles12.error}>{error}</div>) : ""}
                <div className={styles12.data}>
                    <label htmlfor='name'>Name :</label>
                    <input type='text' className={styles12.inputbox} id='name' onChange={nameHandler} value={userdata.name}
                        placeholder='Enter your Name'></input>
                </div>
                <div className={styles12.data}>
                    <label htmlfor='mailid'>Mail Id :</label>
                    <input type='email' className={styles12.inputbox} id='mailid' onChange={mailHandler} value={userdata.email}
                        placeholder='Enter your Mail Id'></input>
                </div>
                <div className={styles12.data}>
                    <label htmlfor='pwd'>Password:</label>
                    <input type='password' className={styles12.inputbox} id='pwd' onChange={passwordHandler} value={userdata.password}
                        placeholder='Enter your Password'></input>
                </div><br></br><br></br>
                <button type='submit' className={styles12.submit}>Login</button>
            </form>
        </div>
    );

}
export default Login;
