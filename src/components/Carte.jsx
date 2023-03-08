import '../styles/Carte.scss'
import {Card, Image, Text, Badge, Button, Group, Title,Chip} from '@mantine/core';
import {useState} from "react";
function Carte(props) {
    const data = props.data;
    const [rendu, setRendu] = useState(false);
    let renduBouton;
    if(!rendu){
        renduBouton = <Button color="red" radius="lg" compact className="boutonRendu">Non rendu</Button>
    }
    else{
        renduBouton = <Button color="teal" radius="lg" compact className="boutonRendu">Rendu</Button>
    }
    return(
        // <div className="container">
        //     <div className="cardHeader"></div>
        //     <div className="cardBody">
        //         <div>{data.title}</div>
        //         <div>{data.content}</div>
        //     </div>
        //     <div className="cardFooter">{data.footer}</div>
        // </div>
        <Card shadow="sm" padding="lg" radius="md" withBorder className="Card">
            <Card.Section className="cardHeader">
                <Title>{data.nomDuDevoir}</Title>
            </Card.Section>
            <div className="cardBody">
                <Text>{data.description}</Text>
            </div>
            <div className="cardFooter"><Text>{data.module}</Text></div>
            <Group className="groupBadge">
                <Badge color="teal" variant="filled">{data.dateDeRendu}</Badge>
                <Badge color="grape" className="badge">{data.module}</Badge>
                <div onClick={() => setRendu(!rendu)}>
                    {renduBouton}
                </div>
            </Group>

        </Card>
    )
}
export default Carte
