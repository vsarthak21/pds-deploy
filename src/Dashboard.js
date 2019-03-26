import React from 'react';
import Comment from './comment/Comment.js';
import ApprovalCard from './comment/ApprovalCard.js';
import faker from 'faker';
import Cards from './Cards';
import Chart from './Chart';
import {Row , Col, Container} from 'react-bootstrap';
import { Progress } from 'reactstrap';
import Todo from "./Todo";
import PieChart from './Graph.js';

class Dashboard extends React.Component{
    render(){
    return(
    <div>
        <Container fluid={true} style={{ height: "100%" }}>
            <Row style={{ marginBottom: "2rem" }}>
                <Col md={9}>
                    <Cards />
                </Col>
                <Col md={3} style={{display:"block", margin:"auto"}}>
                    <PieChart/>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    <Todo />
                </Col>
                <Col md={3}>
                    <div className="text-left"><h3><strong>Merch Group</strong></h3><br /></div>
                    <Progress style={{ marginBottom: "1rem" }} value="1" max="5" />
                    <Progress style={{ marginBottom: "3rem" }} value="2" max="5" />

                    <div className="ui container comments">
                        <ApprovalCard>
                            <Comment author="Sam" time="Today at 6:00PM" content="Nice Job" avatar={faker.image.avatar()} />
                        </ApprovalCard>
                        <ApprovalCard>
                            <Comment author="Udit" time="Today at 9:00PM" content="Nice Job Done" avatar={faker.image.avatar()} />
                        </ApprovalCard>
                        <ApprovalCard>
                            <Comment author="Sarthak" time="Yesterday at 7:00AM" content="Template Comment" avatar={faker.image.avatar()} />
                        </ApprovalCard>
                        <ApprovalCard>
                            <Comment author="Abcd" time="Yesterday at 12:00PM" content="Hello" avatar={faker.image.avatar()} />
                        </ApprovalCard>
                        <ApprovalCard>
                            <Comment author="Saumya" time="2 Days Ago at 6:00PM" content="Hi Testing" avatar={faker.image.avatar()} />
                        </ApprovalCard>
                        <ApprovalCard>
                            <Comment author="Amit" time="23 Days ago at 7:30PM" content="Done" avatar={faker.image.avatar()} />
                        </ApprovalCard>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>)
}}

export default Dashboard;