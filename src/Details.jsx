const Details = ({details, setDetails}) => {
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