import React from 'react'
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (
        <div className="Error_page">
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <p>
              The page you were looking for could not be found
            </p>
            <Link to="/"><button className="btn btn-primary">Go to Homepage</button></Link>
        </div >
    )
}

export default PageNotFound