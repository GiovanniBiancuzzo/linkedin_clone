import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import {BsFillBookmarkFill} from "react-icons/bs";
import {MdPersonAddAlt1} from "react-icons/md";
import {Button} from "react-bootstrap";
import {AiFillSketchSquare} from "react-icons/ai";


const Sidebarleft = () => {
    
    const profile = useSelector((state) => state.profile.actualProfile);

  return (
    <div>
    <Card style={{ width: '15rem' }} className="Cardside" >
      
      <Card.Header className='cardheader'>
      <img src='https://i.pinimg.com/736x/9d/64/ea/9d64eabe1a8e84fd246ade05b727ed6f.jpg' alt='' className='imgsideprofile'/>
      <img className='imgsidebar'
       src={profile.image}
       roundedCircle
       width={"68px"}
        />
        
        <h5><b>Giovanni Biancuzzo</b></h5>
        <h6>Junior Front End Developer</h6>
      </Card.Header>
      
      <ListGroup variant="flush" className='listgroup'>
        <ListGroup.Item id='list__group'><p>Collegamenti</p>
        <p><b>Espandi la tua rete</b> <MdPersonAddAlt1/></p></ListGroup.Item>

        <ListGroup.Item id='list__group' className='listgroup2'><p>Accedi a strumenti e informazioni in esclusiva</p><p><Button variant="link" className="link-p"><AiFillSketchSquare size="20" className='premiumicons'/> Prova premium gratis</Button></p></ListGroup.Item>
        
        <ListGroup.Item id='list__group'><p> <BsFillBookmarkFill className='iconsbook'/> <b>I miei elementi</b></p></ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '15rem' }} className="Cardside2">
    <Button variant="link" className="link-c"><b>Gruppi</b></Button>
    <Button variant="link" className="link-c"><b>Eventi</b></Button>
    <Button variant="link" className="link-c"><b>Hashtag seguiti</b></Button>
    <hr />
    <Button variant="link" className="link-d"><b>Scopri di più</b></Button>
    </Card>
     </div>
  );
}

export default Sidebarleft;