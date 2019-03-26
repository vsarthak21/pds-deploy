import React from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

const selectRow = {
    mode: 'checkbox',
    clickToSelect: false,
    clickToEdit: true,
};


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

            count: 5

        }

        this.newRow = this.newRow.bind(this);
    }

    newRow = () => {
        let row = {
            task: this.state.count + 1,
            date: " ",
            subject: " ",
            name: " ",
            'relatedTo': " "
        }
        this.setState({
            count: this.state.count + 1,
            products: [...this.state.products, row]
        })
    }

    render() {
        return (
            <div>
                <Button variant="outline-secondary" style={{ float: "right", marginBottom: "0.5rem" }} onClick={this.newRow}>Add Row</Button>
                <BootstrapTable classes="rounded table-hover" headerClasses="thead-dark" keyField='task' data={this.state.products} columns={this.state.columns} cellEdit={cellEditFactory({ mode: 'click' })} selectRow={selectRow} />
            </div>
        );
    }

}

export default Todo;