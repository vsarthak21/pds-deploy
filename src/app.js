import React from 'react';
import NavEg from './NavEg'
import 'bootstrap/dist/css/bootstrap.css';
// import TableTwo from '../src/todo/TableTwo';
import LoginPage from './LoginPage';
import { RenderItems } from './Navigation';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPds: false,
            isLoggedIn: false
        }
    }

    Decide = (props) => {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <div>
                    <RenderItems showP={this.state.showPds} />
                </div>
            );

        }
        return <LoginPage validate={this.authenticate} />;
    }

    authenticate = () => {
            this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <div>
                {(this.state.isLoggedIn) ? (
                    <RenderItems showP={this.state.showPds} />
                ) : (
                        <LoginPage validate={this.authenticate} />
                    )}
                {/* <Decide isLoggedIn={this.state.isLoggedIn} /> */}
            </div>
        )

    }
}

export default App;