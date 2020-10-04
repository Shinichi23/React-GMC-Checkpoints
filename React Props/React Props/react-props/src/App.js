import React from 'react';
import img from './Profil/image.jpg'

import './App.css';
import Profil from './Profil/Profil';

const data = [{fullName: 'Saitama',bio: " typesetting industry", profession: 'Hero'
}];

const handleName = (e) => {
  return alert(e)
};



function App() {
  return (
    <>
      <Profil data={data} handleName={handleName}>

        <img style={{width: 300, height: 240}} src={img} alt='new'/>

      </Profil>
    </>
  );
}

export default App;
