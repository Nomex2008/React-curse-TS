import { IDetails } from "./types";

interface Props {
    details : IDetails,
    setDetails: React.Dispatch<React.SetStateAction<IDetails>>
}

const Details = ({details, setDetails}: Props) => {
    return ( 
        <>
            <button onClick={() => {setDetails(prev => {
                return {
                    ...prev,
                    title: prev.title + ' New title',
                }
            })}}>{details.btnText}</button>
            <h1>{details.title}</h1>
        </> );
}
 
export default Details;