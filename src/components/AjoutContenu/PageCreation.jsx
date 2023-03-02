import {useNavigate} from "react-router-dom";
import '../../styles/PageCreation.scss'
import { TextInput, Checkbox, Button, Group, Box, Textarea} from '@mantine/core';
import { useForm} from "@mantine/form";

function PageCreation(){
    const navigate = useNavigate();
    function retourAccueil(){
        navigate('/');
    }
    const form = useForm({
        initialValues: {
            nomDuDevoir: '',
            dateDeRendu: '',
            description: '',
            module: ''
        }
    });
    return (
        <div className='CreationMainDiv'>
            <div>
                <button onClick={retourAccueil}> Retour accueil </button>
            </div>
            <div className='EcranCreation'>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <div className="formHeader">
                        <TextInput withAsterisk label="Nom du devoir" name="nomDuDevoir" required className="inputForm"/>
                        <TextInput withAsterisk label="Date de rendu" name="dateDeRendu" required className="inputForm"/>
                    </div>
                    <Textarea rows={5} label={'Description'} name="description" required className="descriptionInputForm" styles={{ field: { height: '20em' } }}/>
                    <TextInput withAsterisk label="Module" name="module" required />

                </form>
            </div>
        </div>
    )
}
export default PageCreation;
