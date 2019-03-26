import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type} from 'react-bootstrap-table2-editor';


class TableUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                
                {
                    userid: "udit",
                    forname: "",
                    surname: "shivam",
                    type:"abcd",
                    sdate:"6/3/1997",
                    edate:"6/3/1997"

                },
                {
                    userid: "sanket",
                    forname: "",
                    surname: "saumya",
                    type:"abcd",
                    sdate:"6/3/1997",
                    edate:"6/3/1997"

                },{
                    userid: "upasana",
                    forname: "",
                    surname: "gogna",
                    type:"abcd",
                    sdate:"6/3/1997",
                    edate:"6/3/1997"

                },
            ],

            columns: [
                {
                    dataField: 'userid',
                    text: 'USER ID'
                },
                {
                    dataField: 'forename',
                    text: 'Forename',
                },
                {
                    dataField: 'surname',
                    text: 'Surname',
                },
                {
                    dataField: 'type',
                    text: 'Type'

                },
                {
                    dataField: 'sdate',
                    text: 'Start Date',
                    editor: {
                        type: Type.DATE
                    },
                },
                {
                    dataField: 'edate',
                    text: 'Start Date',
                    editor: {
                        type: Type.DATE
                    }
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

export default TableUser ;