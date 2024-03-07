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

export function App() {
  return (
    <>
      <div className={styles.hello}>Hello</div>
      {menu.map(item => (
        <p key={item.link}>{item.name}</p>
      ))}
      <img src="/email.jpg" alt="" />
    </>
  )
}