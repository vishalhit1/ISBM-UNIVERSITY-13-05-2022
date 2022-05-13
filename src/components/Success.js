import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Success = () => {
return(
    <div>
        <header class="site-header" id="header">
            <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
        </header>

        <div class="main-content">
            <div className='check-icon'><FaCheck /></div>
            <p class="main-content__body" data-lead-id="main-content-body">Your Payment has been completed successfully <br/> One of our Executive will contact you as soon as possible..</p>
            <div className="homepage"><button><a href="http://isbmuniversity.edu.in/">Go to Homepage</a></button></div>
        </div>
    </div>
)
}

export default Success;