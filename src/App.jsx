import { useRef, useState } from "react";
import styles from "./App.module.scss";
import Details from "./Details";
import First from "./First";
import UseEffect from "./UseEffect";

export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title:'Title',
    hello:'Hello',
    btnText:'Btn',
  })

  const imageRef = useRef()

  return (
    <>
      <First details={details}/>
      <Details details={details} setDetails={setDetails}/>
      <UseEffect details={details}  setDetails={setDetails}/>
    </>
  )
}