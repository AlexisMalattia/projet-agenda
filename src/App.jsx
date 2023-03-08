import { useState } from 'react'
import './App.scss'
import Carte from "./components/Carte.jsx";
import { useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";

function App() {
    const [contenu,setContenu] = useState([]);
    let [compteurId, setCompteurId] = useState(4);
    const history = useNavigate();
    const location = useLocation();
    function mockContenu (){
        let mock = [
            {
                id : 1,
                nomDuDevoir : 'titre 1',
                dateDeRendu: '14/05/2022',
                description : 'contenu 1',
                module : 'footer 1',
            },
            {
                id : 2,
                nomDuDevoir : 'titre 2',
                dateDeRendu: '20/02/2023',
                description : 'contenu 2',
                module : 'footer 2',
            },
            {
                id : 3,
                nomDuDevoir : 'titre 3',
                dateDeRendu: '19/01/2023',
                description : 'contenu 3',
                module : 'footer 3',
            }
        ]
        setContenu(mock);
    }
    const ajouterDevoir = () => {
        history('/ajout-element')
    }
    const mapDatas = contenu.map((data)=>
    <Carte key = {data.id} data={data}/>)
    function majDevoir() {
        let contentAdded = location.state?.data
        setContenu([...contenu,{id:compteurId,nomDuDevoir:contentAdded.nomDuDevoir,dateDeRendu:contentAdded.dateDeRendu,description:contentAdded.description,module:contentAdded.module}])
        setCompteurId(compteurId+1);
    }

    return (
    <div className="App">
        <button onClick={mockContenu}>mock devoir</button>
        <button onClick={ajouterDevoir}>Ajouter devoir</button>
        <button onClick={majDevoir}>Maj devoir</button>
        <div className="cartes">
            {mapDatas}
        </div>

    </div>
  )
}

export default App
