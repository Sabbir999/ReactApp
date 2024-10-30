const ErrorMessage = ({items}) =>{
    return(
        <>
        {items.length===0 ?<h3> There is no item in the list</h3>: null}
        </>
    )
}
export default ErrorMessage;