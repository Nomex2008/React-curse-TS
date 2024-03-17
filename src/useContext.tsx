import { useAuth } from "./hooks/useAuth";

const UseContext = () => {
    const {isLoggedIn} = useAuth()

    return ( <>
    <h1>
        {isLoggedIn ? 'Hi Alex!' : 'Firstly conect!'}
    </h1> 

    {
    //console.log(isLoggedIn)
    }
    </>);
}
 
export default UseContext;