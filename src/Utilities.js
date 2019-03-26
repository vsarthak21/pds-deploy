import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor'
import {Type } from 'react-bootstrap-table2-editor';
import SearchBar from "./SearchBar";
import TableSize from "./TableSize";
import TableUser from "./TableUser";
import TableColor from "./TableColor";

class Utilities extends React.Component{
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
                    
                } ],
        }

       /*  this.toggle = this.toggle.bind(this);
        this.copyListener = this.copyListener.bind(this);
        this.delListener = this.delListener.bind(this);
        this.addListener = this.addListener.bind(this);
        this.togglePop = this.togglePop.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
        this.saveListener = this.saveListener.bind(this); */
    }
    render(){
    return(
        <div>
            <div style={{ backgroundColor: 'cyan', height: 100 }}>
                    <div className="row">

                        <div className="col-1">

                            <p style={{ fontSize: 20, marginTop: 35, paddingLeft: 5 }}><strong> Operations </strong></p>
                        </div>

                        <div className="col-1">
                            
                                <i onClick={this.toggle} style={{ marginTop: 35, paddingLeft: 5 }} class="big plus circle icon" data-toggle="tooltip" data-placement="bottom" title="Add Row"></i>
                            
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

                        </div></div>
                         <SearchBar/>
                        



            <Tabs defaultActiveKey="grpAct" id="uncontrolled-tab-example" className="nav-justified">
                    <Tab eventKey="Utilities Menu" title="Utilities Menu" disabled ></Tab>
                        
                    <Tab eventKey="grpAct" title="Maintain user Product Group Activity">
                        <TableUser/>
                    </Tab>
                    <Tab eventKey="productfeature" title="MProduct Feature" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
                        
                    </Tab>
                    <Tab eventKey="maintainSizes" title="Maintain Sizes" >
                        <TableSize/>
                    </Tab>
                    <Tab eventKey="maintainColor" title="Maintain Color" >
                        <TableColor/>
                    </Tab>
                    <Tab eventKey="irishUplift" title="Maintain Irish Uplift" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>
                    <Tab eventKey="setupMaintain" title="User setup Maintainance" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>
                    <Tab eventKey="misc" title="Miscellaneous" >
                        <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />

                    </Tab>      
                </Tabs>;
        </div>)
    }}

    export default Utilities;