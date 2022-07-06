import { useContext ,useState} from 'react';
import {useNavigate} from 'react-router-dom';
//CONTEXT
import FirebaseContext from '../../../Context/FireBaseContext';
import styles from './styles/Register.module.css';

const Register = () => {
    const navigate= useNavigate()
    const {register}=useContext(FirebaseContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
   <div className={styles.register_container}>
    <form>
       <h1>BİR HESAP OLUŞTURUN !</h1>
       <div className={styles.social_container}>
        <p>Bir Sosyal Medya Hesabıyla Giriş Yap...</p>
        <div className={styles.social_login_button}>
            <button>
            <i className="fa-brands fa-facebook"></i>
            </button>
            <button>
            <i className="fa-brands fa-instagram"></i>
            </button>
            <button>
            <i className="fa-brands fa-google-plus-g"></i>
            </button>
        </div>
       </div>
       <div className={styles.form_container}>
       <div className={styles.form_control}>
        <input type="email" name='user_email' placeholder={'Email'} onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       <div className={styles.form_control}>
        <input type="password" name='user_password' placeholder={'Password'} onChange={(e)=>setPassword(e.target.value)} />
       </div>
       <button className={styles.register_button} onClick={(e)=>{
        e.preventDefault()
        register(email,password)
       }}>KAYIT OL  </button>
       </div>
    </form>
    <div className={styles.banner_container}>
      <h3> Zaten Bir Hesaba Sahip misin ?</h3>
      <button  onClick={(e)=>{
        e.preventDefault()
        navigate('auth/login')
      }} className={styles.btn_bnr}>GİRİŞ YAP</button>
    </div>
   </div>
  )
}

export default Register;