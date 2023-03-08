import {useNavigate} from "react-router-dom";
import '../../styles/PageCreation.scss'
import { TextInput, Checkbox, Button, Group, Box, Textarea} from '@mantine/core';
import { useForm} from "@mantine/form";

function PageCreation(){
    const navigate = useNavigate();
    function retourAccueil(){
        navigate('/',{state: {data: form.values}});
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
                        <TextInput withAsterisk label="Nom du devoir" name="nomDuDevoir" required className="inputForm " {...form.getInputProps('nomDuDevoir')}/>
                        <TextInput withAsterisk label="Date de rendu" name="dateDeRendu" required className="inputForm" {...form.getInputProps('dateDeRendu')}/>
                    </div>
                    <Textarea minRows={5} autosize label={'Description'} name="description" required className="descriptionInputForm" {...form.getInputProps('description')}/>
                    <TextInput withAsterisk label="Module" name="module" required  {...form.getInputProps('module')}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default PageCreation;
