import { useRouteError } from "react-router-dom"

const PageNotFound = () => {
    // const err = useRouteError();
    const {status,statusText} = useRouteError();

    return (
        <>
        <h1>Oooops!!......</h1>
        <h2>Something went wrong</h2>
        {/* <h2>{err.status+" : "+err.statusText}</h2> */}
        <h2>{status+" : "+statusText}</h2>
        </>
    )
}
export default PageNotFound;