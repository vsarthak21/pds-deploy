import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class WebCopyTable2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                  materialcontent:'COTTON',
                  care:'HAND WASH',
                  internetfeat:'SOFT',
                  catalogue:'',
                  techspecs:'',
                  dimensions:'38in'
                }

            ],

            columns: [
                {
                    dataField: 'materialcontent',
                    text: 'Material Content'
                },
                {
                    dataField: 'care',
                    text: 'Care Instruction'
                }
                , {
                    dataField: 'internetfeat',
                    text: 'Internet Selling Features'
                },
                {
                    dataField: 'catalogue',
                    text: 'Catalogue Selling Features'
                },
                {
                    dataField: 'techspecs',
                    text: 'Technical Specs'
                },
                {
                    dataField: 'dimensions',
                    text: 'Dimensions'
                }
    
            ]
        }
    }

    render() {
        return (
            <div>               
                <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} />
            </div>
        );
    }

}

export default WebCopyTable2;