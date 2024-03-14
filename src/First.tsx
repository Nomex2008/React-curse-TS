import { MutableRefObject } from "react";
import { useRef } from "react";
import styles from "./App.module.scss";
import { IDetails } from "./types";

interface Props {
    details : IDetails,
}
interface ImageRefType {
    style: {
        borderRadius?: string;
        boxShadow?: string;
    };
}


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
  

const First = ({details}: Props) => {
    const imageRef = useRef<ImageRefType>(null)

    const onClick = () => {
        //console.log(imageRef.current)
        if(!imageRef.current) return

        imageRef.current.style.borderRadius = '20px';
        imageRef.current.style.boxShadow = '0 3px 6px rgba(0,0,0, .1)'
    }
    return ( 
        <>
            <div className={styles.hello}>{details.hello}</div>
            {menu.map(item => (
                <p key={item.link}>{item.name}</p>
            ))}

            <img ref={imageRef as MutableRefObject<HTMLImageElement>} src="/email.jpg" alt="" />
            <br/>
            <button onClick={onClick}>Change img</button>

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