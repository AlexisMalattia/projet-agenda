import {useNavigate} from "react-router-dom";

function PageCreation(){
    const navigate = useNavigate();
    function retourAccueil(){
        navigate('/');
    }
    return (
        <div>
            <button onClick={retourAccueil}> Retour accueil </button>
        </div>
    )
}
export default PageCreation;
