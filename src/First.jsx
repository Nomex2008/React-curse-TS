import styles from "./App.module.scss";

const menu = [
    {
      name:'Home',
      link:'/',
    },
    {
      name:'Prodacts',
      link:'/prodacts',
    },
]
  
const isAuth = false;
const role = 'admin';
  

const First = () => {
    return ( 
        <>
            <div className={styles.hello}>Hello</div>
            {menu.map(item => (
                <p key={item.link}>{item.name}</p>
            ))}
            <img src="/email.jpg" alt="" />

            <p>
                {isAuth 
                ? 'авторизований' 
                : role === 'admin'
                ? 'Admin'
                : 'login'}
            </p>
        </>
     );
}
 
export default First;