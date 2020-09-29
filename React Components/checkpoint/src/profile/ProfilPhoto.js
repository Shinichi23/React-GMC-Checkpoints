import React from 'react'
import img from './profileImg.jpg'

const Image = () => {
    return (
        <>
        <img src ={img} alt= 'profile' style={{height:200, width:300, borderRadius:'30%'}}/>
        </>
    );
}

export default Image;