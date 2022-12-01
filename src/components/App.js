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
const [search, setSearch] = useState('');
const [searchCounselor, setSearchCounselor] = useState ('');


///-----

const selectCounselor = (ev) => {
  ev.preventDefault(); 
  setSearchCounselor(ev.target.value)
}

const searchAdalaber = (ev) => {
 ev.preventDefault();
 setSearch(ev.target.value);
};

const handleClick =(ev) => {
  ev.preventDefault();
  setData ([...data, newAdalaber])
  //al hacer click me borra los datos del input
  setNewAdalaber({
  name:'',
  counselor: '',
  speciality:'',
  })
};

const handleNewAdalaber = (ev) =>{
  ev.preventDefault();
  setNewAdalaber ({...newAdalaber, [ev.target.id] : ev.target.value })}



const renderAdalabers = data

.filter ((adalaber)=>
  adalaber.name.toLowerCase().includes(search.toLowerCase())
)

.filter ((select) =>
  select.counselor.includes(searchCounselor)

) 

.map((adalaber) => {
return (
<tr key={adalaber.id} className="adalaber__info">
      <td className="adalaber__name">{adalaber.name}</td>
      <td className="adalaber__tutor">{adalaber.counselor}</td>
      <td className="adalaber__specialty">{adalaber.speciality}</td>
      <td> 
        {adalaber.social_networks.map((eachSocial, index) =>{
          return (
            <a key={index} href={eachSocial.url} className="socials__adalabers">
            {eachSocial.name} 
            </a>
            );
        })}
      </td>
</tr>

);
});


return (
<div className="page" >
<header className="header">
  <h1>Adalabers</h1>
</header>
<main>
  <form>
  <label>
    <input
      className="header__search"
      autoComplete="off"
      type="search"
      name="search"
      placeholder="Filtrar contactos por nombre"
      onInput={searchAdalaber}
      value={search}
    /> 
    </label>
<select onChange= {selectCounselor}>
  <option value="Escoge una opción">Escoge una opción</option>
  <option value="Dayana">Dayana</option>
  <option value="Iván">Iván</option>
  <option value="Yanelis">Yanelis</option>
  <option value="Miguel">Miguel</option>
</select>
</form>
<table className="table">
<thead><tr>
    <th className="title">Nombre</th>
    <th className="title">Tutora</th>
    <th className="title">Especialidad</th>
    <th className="title">Redes Sociales</th>
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