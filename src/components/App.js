// Fichero src/components/App.js
import {useState} from 'react';
import '../styles/App.scss'
import adalabers from '../data/adalabers.json';

function App() {
const [data, setData] = useState(adalabers);

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
<div className="page">
<header className="header">
  <h1>Adalabers</h1>
</header>
<main>
<table className="table">
<thead><tr>
    <th>Nombre</th>
    <th>Tutora</th>
    <th>Especialidad</th>
</tr></thead>
<tbody>
{renderAdalabers}

<tr>
      <td>MariCarmen</td>
      <td>Yanelis</td>
      <td>Python</td>
</tr>
<tr>
      <td>Amparo</td>
      <td>Dayana</td>
      <td>IA</td>
</tr>

<tr>
      <td>Escandia</td>
      <td>Iván</td>
      <td>3D graphics</td>
</tr>
</tbody>
</table> 
</main>
</div>
  );
}
export default App;