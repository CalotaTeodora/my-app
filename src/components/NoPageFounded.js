
const NoPageFounded = ({keyword, path}) => {
    if (path !== keyword) {  
    return(
        <>
        <h1 className="text-center">Error 404. Page not found.</h1>
        </>       
    )
}
}

export default NoPageFounded;