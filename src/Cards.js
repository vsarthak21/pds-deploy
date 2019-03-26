import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'




export default class Cards extends React.Component {
  render() {
    return (
      <Container fluid={true} >
        <Row style={{marginTop:"2rem"}}>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"blue", color:"white", paddingBottom:"2rem",width:"14rem",height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>11</h2></Card.Body>
              <Card.Body>
                Open activities <br/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"green", color:"white", paddingBottom:"2rem",width:"14rem",height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>17</h2></Card.Body>
              <Card.Body>
                Open Sessions <br/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#696969	", color:"white", paddingBottom:"2rem",width:"14rem",height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>08</h2></Card.Body>
              <Card.Body>
                Past activities
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#696969	", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>02</h2></Card.Body>
              <Card.Body>
                Products pushed to BOS
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#696969	", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>02</h2></Card.Body>
              <Card.Body>
                Products with no selling price
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#696969	", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>02</h2></Card.Body>
              <Card.Body>
                Products without stocks
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#696969	", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>04</h2></Card.Body>
              <Card.Body>
                Previous season products
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"black", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>0</h2></Card.Body>
              <Card.Body>
                Products with error
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"black", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>0</h2></Card.Body>
              <Card.Body>
                Total products sent to RMS
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} style={{marginRight:"1rem"}}>
            <Card style={{background:"#ff1a1a", color:"white", paddingBottom:"2rem",width:"14rem", height:"12rem", marginBottom:"1rem"}}>
              <Card.Body><h2>2</h2></Card.Body>
              <Card.Body>
                Total Activities Failed
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      );
  }

}

