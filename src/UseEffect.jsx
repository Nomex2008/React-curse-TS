import { useEffect } from "react";

const UseEffect = ({details, setDetails}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDetails(prev => ({...prev, isLoading:false}))
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    useEffect(() => {
        console.log('title has changed!')
    }, [details.title])

    return ( 
        <>
        <div>
            UseEffect
        </div>

        {details.isLoading ? <p>Loading...</p> :
        <p>Loading finish!</p>
        }

        </>
     );
}
 
export default UseEffect;