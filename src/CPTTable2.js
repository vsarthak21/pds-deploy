import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class CPTTable2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                  cpt:'Women Jumper',
                  charac:'Women Top Style',
                  charval:'Regular',
                  usermod:'TP532',
                  datemod:'',
                  usercreate:'',
                  datecreated:''
                },
                {
                    cpt:'Women Jumper',
                    charac:'Fitting',
                    charval:'Mighty',
                    usermod:'TP532',
                    datemod:'',
                    usercreate:'',
                    datecreated:''
                  },
                 
                

            ],

            columns: [
                {
                    dataField: 'cpt',
                    text: 'CPT'
                },
                 {
                    dataField: 'charac',
                    text: 'Characteristics'
                },
                {
                    dataField: 'charval',
                    text: 'Characteristics Value'
                },
                {
                    dataField: 'usermod',
                    text: 'User Modified'
                },
                {
                    dataField: 'datemod',
                    text: 'Date Modified'
                },
                {
                    dataField: 'usercreate',
                    text: 'User Created'
                },
                {
                    dataField: 'datecreated',
                    text: 'Date Created'
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

export default CPTTable2;