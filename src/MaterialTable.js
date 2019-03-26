import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class MaterialTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    size: "5",
                    rms: "sdad",
                    diffid: "dassda"
                }

            ],

            columns: [
                {
                    dataField: 'material',
                    text: 'Material'
                },
                {
                    dataField: 'pct',
                    text: 'PCT%'
                }
                , {
                    dataField: 'code',
                    text: 'Code'
                },
                {
                    dataField: 'weight',
                    text: 'Weight'
                },
                {
                    dataField: 'weightum',
                    text: 'Weight UM'
                },
                {
                    dataField: 'weightdetails',
                    text: 'Weight Details'
                },
                {
                    dataField: 'gauge',
                    text: 'Gauge'
                },
                {
                    dataField: 'yarnacc',
                    text: 'Yarn Account'
                },
                {
                    dataField: 'materialcon',
                    text: 'Material Construction'
                },
                
                
                
                
                
                
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

export default MaterialTable;