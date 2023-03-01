import { useState } from 'react'
import './App.scss'
import Carte from "./components/Carte.jsx";
import { useNavigate} from "react-router-dom";

function App() {
    const [contenu,setContenu] = useState([]);
    const history = useNavigate();
    function mockContenu (){
        let mock = [
            {
                id : 1,
                title : 'titre 1',
                content : 'contenu 1',
                footer : 'footer 1',
            },
            {
                id : 2,
                title : 'titre 2',
                content : 'contenu 2',
                footer : 'footer 2',
            },
            {
                id : 3,
                title : 'titre 3',
                content : 'contenu 3',
                footer : 'footer 3',
            }
        ]
        setContenu(mock);
    }
    const ajouterDevoir = () => {
        history('/ajout-element')
    }
    const mapDatas = contenu.map((data)=>
    <Carte key = {data.id} data={data}/>)
  return (
    <div className="App">
        <button onClick={mockContenu}>mock devoir</button>
        <button onClick={ajouterDevoir}>Ajouter devoir</button>
        <div className="cartes">
            {mapDatas}
        </div>

    </div>
  )
}

export default App
