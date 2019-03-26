import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class CPTTable1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                  cpt:'Men Jumper',
                  charac:'Fitting',
                  charval:'Mighty',
                  usermod:'MESWP',
                  datemod:'',
                  usercreate:'',
                  datecreated:''
                },
                {
                    cpt:'Men Jumper',
                    charac:'Short',
                    charval:'Regular',
                    usermod:'MESWB',
                    datemod:'',
                    usercreate:'',
                    datecreated:''
                  },
                  {
                    cpt:'Men Jumnper',
                    charac:'Sleeve Length',
                    charval:'Crew Neck',
                    usermod:'MESWB',
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

export default CPTTable1;