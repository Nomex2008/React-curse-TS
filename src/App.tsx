import {useState} from "react";
import styles from "./App.module.scss";
import Details from "./Details";
import First from "./First";
import { useAuth } from "./hooks/useAuth";
import UseContext from "./useContext";
import UseEffect from "./UseEffect";

export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title:'Title',
    hello:'Hello',
    btnText:'Btn',
  })
  const {isLoggedIn, setIsLoggedIn} = useAuth()

  return (
    <>
      <First details={details}/>
      <Details details={details} setDetails={setDetails}/>
      <UseEffect details={details}  setDetails={setDetails}/>

      <UseContext/>
      {isLoggedIn ? (
        <button onClick={() => {setIsLoggedIn(false)}}>Live from sistem</button>
      ) : (
        <button onClick={() => {setIsLoggedIn(true)}}>Conect to sistem</button>
      )}
    </>
  )
}