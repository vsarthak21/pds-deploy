import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Popover, PopoverBody } from 'reactstrap';
import styled from "styled-components";

import {Type } from 'react-bootstrap-table2-editor';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor'
import SizeTable1 from './SizeTable1';
import SizeTable2 from './SizeTable2';
import MaterialTable1 from './MaterialTable1';
import MaterialTable2 from './MaterialTable2';
import CPTTable1 from './CPTTable1';
import CPTTable2 from './CPTTable2';
import WebCopyTable1 from "./WebCopyTable1"
import WebCopyTable2 from "./WebCopyTable2"

import FormOpen from './FormOpen';
import { Row,Col } from 'react-bootstrap';

const IconCnt = styled.div`
  
  padding:5px;  
  display: flex;
  justify-content: center;
  
  
`;

const PopHead = styled.div`
 
  justify-content: center;
  display: flex;
  
  
`;



//   const selectRow = {
//     mode: 'radio',
//     clickToSelect: false,
//     clickToEdit: true,
//     onSelect: (row, isSelect, rowIndex, e) => {
//        this.setState
//       },
// };

class TableDiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            popoverOpen: false,
            dropdownOpen: false,
            index:"null",
            products: [
                {   task:1,
                    offer: "3900",
                    catNo: "AB123",
                    supplier: "A MIR CO LTD - FOB",
                    desc: "Cotton Shirt",
                    style: "AB123",
                    
                },
                {   task:2,
                    offer: "3800",
                    catNo: "PB127",
                    supplier: "OL HADFIELD",
                    desc: "Shoes",
                    style: "PB127",
                    
                },
                {},
                {},
                {},
            ],

            columns: [
                {
                    dataField: 'task',
                    text: 'P_Id'
                },
                {
                    dataField: 'offer',
                    text: 'Master offer No.'
                },
                {
                    dataField: 'catNo',
                    text: 'CAT NO.',
                                      
                },
                {
                    dataField: 'supplier',
                    text: 'Supplier',
                   
                }, {
                    dataField: 'desc',
                    text: 'Internet Product Description',
                    
                }, {
                    dataField: 'style',
                    text: 'STYLE',
                    
                }
            ],
        };

        this.toggle = this.toggle.bind(this);
        this.copyListener = this.copyListener.bind(this);
        this.delListener = this.delListener.bind(this);
        this.addListener = this.addListener.bind(this);
        this.togglePop = this.togglePop.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
        this.saveListener = this.saveListener.bind(this);
    }

    selectRow = {
        mode: 'radio',
        clickToSelect: false,
        clickToEdit: true,
        onSelect: (row, isSelect, rowIndex, e) => {
           this.setState({
               index:rowIndex
           })
          },
    };
        
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
        let cptTable,materialTable,webCopyTable,sizeTable;
        if(this.state.index===0){
            cptTable=<CPTTable1/>
            materialTable=<MaterialTable1/>
            sizeTable=<SizeTable1/>
            webCopyTable=<WebCopyTable1/>

        }
        else if(this.state.index===1){
            cptTable=<CPTTable2/>
            materialTable=<MaterialTable2/>
            sizeTable=<SizeTable2/>
            webCopyTable=<WebCopyTable2/>
        }

        return (
            <div>
                
                <div style={{ backgroundColor: 'cyan', height: 100 }}>
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
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="nav-justified" style={{background:"aliceblue"}}>
                    <Tab eventKey="home" title="Cat-Color" >
                        <Row style={{marginTop:"1rem"}}>
                            <Col md={10}>
                                <BootstrapTable selectRow={this.selectRow} classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
                            </Col>
                            <Col style={{marginTop:"3rem"}}>
                                <Row style={{marginBottom:"0.6rem", marginTop:"0.4rem"}}>
                                    <Col><FormOpen /></Col>
                                </Row>
                                <Row style={{marginBottom:"0.6rem", marginTop:"0.4rem"}}>
                                    <Col><FormOpen /></Col>
                                </Row>
                                <Row style={{marginBottom:"0.6rem", marginTop:"0.4rem"}}>
                                    <Col><FormOpen /></Col>
                                </Row>
                                <Row style={{marginBottom:"0.6rem", marginTop:"0.4rem"}}>
                                    <Col><FormOpen /></Col>
                                </Row>
                                <Row style={{marginBottom:"0.6rem", marginTop:"0.4rem"}}>
                                    <Col><FormOpen /></Col>
                                </Row>
                            </Col>
                            </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Sizes">
                         {sizeTable} 
                       {/* <SizeTable1/><SizeTable2/> */}
                    </Tab>
                    <Tab eventKey="contact" title="Materials" >
                         {materialTable} 
                        {/* <MaterialTable1/><MaterialTable2/> */}
                    </Tab>
                    <Tab eventKey="cpt" title="CPT" >
                        {cptTable}
                    </Tab>
                    <Tab eventKey="webcopy" title="Web-Copy" >
                         {webCopyTable} 
                    </Tab>
                </Tabs>;
                
            </div>
        );
    }
}

export default TableDiv;