import React from 'react'
import ProfilPhoto from './profile/ProfilPhoto'
import FullName from './profile/FullName'
import Address from './profile/Address'
import 'bootstrap/dist/css/bootstrap.min.css';


const MainFunction = () => {
    return(
        <>
            <div className='container'>
                <FullName/>
                <ProfilPhoto/>
                <Address/>
            </div>
        </>
    );
}

export default MainFunction;

// i did just the tasks and little bit of design cause am in lack of time !!