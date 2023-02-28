import { useState } from 'react'
import './App.scss'
import Carte from "./components/Carte.jsx";

function App() {
    const [contenu,setContenu] = useState([]);
    function mockContenu (){
        let mock = [
            {
                title : 'titre 1',
                content : 'contenu 1',
                footer : 'footer 1',
            },
            {
                title : 'titre 2',
                content : 'contenu 2',
                footer : 'footer 2',
            },
            {
                title : 'titre 3',
                content : 'contenu 3',
                footer : 'footer 3',
            }
        ]
        setContenu(mock);
    }
    const mapDatas = contenu.map((data)=>
    <Carte data={data}/>)
  return (
    <div className="App">
        {mapDatas}
    </div>
  )
}

export default App
