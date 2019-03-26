import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import styled from "styled-components";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Icon from 'react-icons-kit';
import {Type } from 'react-bootstrap-table2-editor';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor'

const IconCnt = styled.div`
  
  padding:5px;  
  display: flex;
  justify-content: center;
  
  
`;

const PopHead = styled.div`
 
  justify-content: center;
  display: flex;
  
  
`;

class TableDiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            popoverOpen: false,
            dropdownOpen: false,
            products: [
                {
                    task: 1,
                    date: "2019-12-03",
                    subject: "Meeting",
                    name: "Sarthak",
                    'relatedTo': "SopraSteria"
                },
                {
                    task: 2,
                    date: "2019-12-03",
                    subject: "Meeting",
                    name: "Sarthak",
                    'relatedTo': "SopraSteria"
                },
                {
                    task: 3,
                    date: "2019-12-03",
                    subject: "Meeting",
                    name: "Sarthak",
                    'relatedTo': "SopraSteria"
                },
                {
                    task: 4,
                    date: "2019-12-03",
                    subject: "Meeting",
                    name: "Sarthak",
                    'relatedTo': "SopraSteria"
                },
                {
                    task: 5,
                    date: "2019-12-03",
                    subject: "Meeting",
                    name: "Sarthak",
                    'relatedTo': "SopraSteria"
                },
            ],

            columns: [
                {
                    dataField: 'task',
                    text: 'Task No.'
                },
                {
                    dataField: 'date',
                    text: 'Date',
                    editor: {
                        type: Type.DATE
                    },
                    
                },
                {
                    dataField: 'subject',
                    text: 'Subject',
                   
                }, {
                    dataField: 'name',
                    text: 'Name',
                    
                }, {
                    dataField: 'relatedTo',
                    text: 'Related to',
                    
                }],
        };

        this.toggle = this.toggle.bind(this);
        this.copyListener = this.copyListener.bind(this);
        this.delListener = this.delListener.bind(this);
        this.addListener = this.addListener.bind(this);
        this.togglePop = this.togglePop.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
        this.saveListener = this.saveListener.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    togglePop() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
            // popoverOpen: true
        });
        console.log(this.state.popoverOpen)
    }

    toggleDrop() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }



    copyListener() {
        console.log('copy called');
    }

    delListener() {
        console.log('del listener');
    }

    addListener() {
        console.log("data added");
    }

    saveListener() {
        console.log("saved");
    }


    render() {
        return (
            <div>
                
                <div style={{ backgroundColor: 'aliceblue', height: 100 }}>
                    <div className="row">

                        <div className="col-1">

                            <p style={{ fontSize: 20, marginTop: 35, paddingLeft: 5 }}> <strong> Product Data </strong> </p>
                        </div>

                        <div className="col-1">
                            
                                <i onClick={this.toggle} style={{ marginTop: 35, paddingLeft: 5 }} class="big plus circle icon" data-toggle="tooltip" data-placement="bottom" title="Add Cat Number"></i>
                            
                        </div>

                        <div style={{ marginTop: 35, paddingLeft: 5 }} className="col-1" data-toggle="tooltip" data-placement="bottom" title="Copy">
                            <i onClick={this.copyListener} class="big copy icon"></i>
                        </div>

                        <div style={{ marginTop: 35, paddingLeft: 5 }} className="col-1" data-toggle="tooltip" data-placement="bottom" title="Delete">
                            <i onClick={this.delListener} class="big trash icon"></i>
                        </div>

                        <div style={{ marginTop: 35, paddingLeft: 5 }} className="col-1" data-toggle="tooltip" data-placement="bottom" title="Save">
                            <i onClick={this.saveListener} class="big database icon"></i>
                        </div>

                        <div style={{ marginTop: 35, paddingLeft: 5 }} className="col-1" data-toggle="tooltip" data-placement="bottom" title="Filter">

                            <i id="Popover1" class="big filter icon" onClick={this.togglePop}></i>
                            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" >

                                <PopoverBody>
                                    <IconCnt>
                                        <select class="ui fluid dropdown">
                                            <option value="">Group </option>
                                            <option value="1">Item 1  </option>
                                            <option value="0">Item 2  </option>
                                        </select>
                                    </IconCnt>

                                    <IconCnt>
                                        <select class="ui fluid dropdown">
                                            <option value="">Department</option>
                                            <option value="1">Item 1  </option>
                                            <option value="0">Item 2  </option>
                                        </select>
                                    </IconCnt>

                                    <IconCnt>
                                        <select class="ui fluid dropdown">
                                            <option value="">Range</option>
                                            <option value="1">Item 1  </option>
                                            <option value="0">Item 2  </option>
                                        </select>
                                    </IconCnt>

                                    <IconCnt>
                                        <select class="ui fluid dropdown">
                                            <option value="">Season</option>
                                            <option value="1">Item 1  </option>
                                            <option value="0">Item 2  </option>
                                        </select>
                                    </IconCnt>

                                    <IconCnt>
                                        <select class="ui fluid dropdown">
                                            <option value="">Supplier</option>
                                            <option value="1">Item 1  </option>
                                            <option value="0">Item 2  </option>
                                        </select>
                                    </IconCnt>

                                </PopoverBody>

                            </Popover>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 35, marginLeft: 35 }} className="col-1">
                    <div style={{ marginTop: 35, marginLeft: 35 }} className="col">



                      

                    </div>


                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Cat Num.</ModalHeader>
                        <ModalBody>
                            <form class="ui form">
                                <div class="field">
                                    <label>Cat Name</label>
                                    <label><small> Cat number must be XX999s </small></label>
                                    <input type="text" name="first-name" />
                                </div>
                                <div class="field">
                                    <label> Suppplier </label>
                                    <label><small> Select from dropdown</small></label>

                                    <select class="ui fluid dropdown">
                                        <option value=""></option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>

                                </div>


                                <div class="field">
                                    <label> Range </label>

                                    <select class="ui fluid dropdown">
                                        <option value=""></option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>

                                </div>

                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addListener}>Add</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="nav-justified">
                    <Tab eventKey="home" title="Cat-Color" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>
                    <Tab eventKey="profile" title="Sizes">
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>
                    <Tab eventKey="contact" title="Materials" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
                        
                    </Tab>
                    <Tab eventKey="cpt" title="CPT" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
                        
                    </Tab>
                    <Tab eventKey="webcopy" title="Web-Copy" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>
                </Tabs>;
            </div>
        );
    }
}

export default TableDiv;