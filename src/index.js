import React from 'react';
import ReactDOM from 'react-dom';
// import Login from './Login';
import App from './app';
import LoginPage from './LoginPage';
import TableDiv from './TableDiv';


// import { Navigation } from './containers';
// import { RenderItems } from './Navigation';
// import NavEg from './NavEg';

  // function Decide(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return (
  //     <div>
  //       <App/>
  //     </div>
  //     );
      
  //   }
  //   return <LoginPage/> ;
  // }


ReactDOM.render(
    // Try changing to isLoggedIn={false}:
    // <Decide isLoggedIn={false} />
    <App/>,
    document.getElementById('root')
  );


