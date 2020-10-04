import React from 'react';
import PropTypes from 'prop-types';



const Profil = props => {
    return (
        <>
            <h1 stye={{color:"#FF7F50"}}><b>FullName: </b>{props.fullName}</h1>
            <h1 stye={{color: "#DC143C"}}><b>Bio: </b>{props.bio}</h1>
            <h1 stye={{color: "#7FFF00"}}><b>Profession: </b>{props.profession}</h1>
            
            <button  onClick={()=> props.handleName(props.fullName)} >Click</button>
        <div>
            <img src={props.src} alt={props.alt} style={props.style}/>
            {props.children}
        </div>        
        </>
    )
};

Profil.defaultProps = {
    fullName: 'Conan' ,
    bio: 'Just started my carreer, looking forard to perform!',
    profession: 'Full Stack Web Developer',
}

Profil.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};

export default Profil


