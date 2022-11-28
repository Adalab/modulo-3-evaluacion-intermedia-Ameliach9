// Fichero src/components/App.js
import {useState} from 'react';
import '../styles/App.scss'
import adalabers from '../data/adalabers.json';

function App() {
  //-------VARIABLES DE ESTADO
const [data, setData] = useState(adalabers);
const [newAdalaber, setNewAdalaber] = useState({
  name:'',
  counselor: '',
  speciality:'',
 });


///-----

const handleClick =(ev) => {
  ev.preventDefault();
  setData ([...data, newAdalaber])

}

const handleNewAdalaber = (ev) =>{
  ev.preventDefault();
  setNewAdalaber ({...newAdalaber, [ev.target.id] : ev.target.value })}

const renderAdalabers = data.map((adalaber) => {
return (
<tr className="adalaber__info">
      <td className="adalaber__name">{adalaber.name}</td>
      <td className="adalaber__tutor">{adalaber.counselor}</td>
      <td className="adalaber__specialty">{adalaber.speciality}</td>
</tr>

);
});


return (
<div className="page" >
<header className="header">
  <h1>Adalabers</h1>
</header>
<main>
<table className="table">
<thead><tr>
    <th className="title">Nombre</th>
    <th className="title">Tutora</th>
    <th className="title">Especialidad</th>
</tr></thead>
<tbody>
{renderAdalabers}
</tbody>
</table> 
<form className="new-contact__form">
          <h2 className="new-contact__title">Nueva Adalaber</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onInput={handleNewAdalaber}
            value={newAdalaber.name}
            
          />
          <input
            className="new-contact__input"
            type="counselor"
            name="counselor"
            id="counselor"
            placeholder="Tutor"
            onInput={handleNewAdalaber}
            value={newAdalaber.counselor}
            
          />
          <input
            className="new-contact__input"
            type="speciality"
            name="speciality"
            id="speciality"
            placeholder="Especialidad"
            onInput={handleNewAdalaber}
            value={newAdalaber.speciality}
          />
          
        </form>
        <button className="new-contact__btn" type="submit" onClick={handleClick}>Añadir una nueva Adalaber</button>
</main>
</div>
  );
}
export default App;