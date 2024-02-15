import React from 'react'; 
import { Button,Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import { Container,Row,Col} from 'reactstrap';
 
const Woman = () => {
        return (      
        <div>
        {/* <marquee>Offer is comming for woman</marquee>  */}
<Container>
   <Row>
     <Col>
       <Card style={{width: '15rem'}}>
        <img
            src={process.env.PUBLIC_URL +'/images/pic1.jpg'}  alt="Sample" />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>
    </Col>
    <Col>
    <Card style={{width: '15rem'}}>
        <img
             src={process.env.PUBLIC_URL +'/images/pic1.jpg'}  alt="Sample" />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>

    </Col>
    <Col>
    <Card style={{width: '15rem'}}>
        <img
             src={process.env.PUBLIC_URL +'/images/pic1.jpg'}  alt="Sample" />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>

    </Col>
    <Col>
    <Card style={{width: '15rem'}}>
        <img
             src={process.env.PUBLIC_URL +'/images/pic1.jpg'}  alt="Sample" />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>

    </Col>
  </Row>
  
</Container>
<hr/>
   <Container>
       <Row>
        <Col> 
        <Card style={{width: '30rem'}}>
        <img
            alt="Sample"
               src="https://picsum.photos/300/200"  />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>
        </Col>
        <Col>
        <Card style={{width: '30rem'}}>
        <img
            alt="Sample"
               src="https://picsum.photos/300/200"  />
                                              
         <CardBody>
             <CardTitle tag="h5">
                   Card title
              </CardTitle>
          <CardSubtitle
             className="mb-2 text-muted"
              tag="h6">
                  Card subtitle
           </CardSubtitle>
        <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
       </CardText>
       <Button>
      Button
     </Button>
    </CardBody>
  </Card>
        </Col>
       
       </Row>
  </Container>
  <hr/>
  <Container>
    <Row><Col className="bg-light border"></Col></Row>
  </Container>
	</div> 
         
  

        )
      };
      
export default Woman;
//https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
 