import React from 'react';
import './App.css';
import Profil from './Profil/Profil';


const fullName = 'Saitama';
const bio = 'typesetting industry';
const profession = 'Hero';

const img = './image.jpg'

const handleName = (e) => {
  return alert(e)
};

function App() {
  return (
    <>
      <Profil fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        {img}
      </Profil>
    </>
  );
}

export default App;
