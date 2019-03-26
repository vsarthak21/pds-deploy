import React from "react";
import { SideNav, Nav } from "react-sidenav";
import NavEg from './NavEg'
import styled from "styled-components";
import Utilities from './Utilities';
import {
  AppContainer as BaseAppContainer,
  ExampleNavigation as BaseNavigation,
  ExampleBody as Body
} from "./containers";
import { Icon } from "react-icons-kit";
import { dashboard } from "react-icons-kit/fa/dashboard";
import { users } from "react-icons-kit/fa/users";
/* import { shoppingCart } from "react-icons-kit/fa/shoppingCart"; */
import { cubes } from "react-icons-kit/fa/cubes";
import { circleO } from "react-icons-kit/fa/circleO";
import Dashboard from "./Dashboard";
import TableDiv from './TableDiv';

const AppContainer = styled(BaseAppContainer)`
  height: calc(160vh - 60px);
`;

const Navigation = styled(BaseNavigation)`              //SideNav Styling
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 300px;
  line-height: 22px;
`;

const IconCnt = styled.div`
  padding:20px;  
  color: #6a56a5;
  display: flex;
  justify-content: center;
  
`;

const IconCntChild = styled.div`
  padding:16px;  
  color: #6a56a5;
  display: flex;
  justify-content: center;
  
`;


const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20"
};

const Text = styled.div`
  padding-left: 8px;
`;



export class RenderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPath: "1",
      showPds: false,
      showUtilities:false,
      dash:"block",
      pdsApp:"none",
      utilities:"none"
    };
  }

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path },
      () => { console.log(this.state.selectedPath) });
  };

  changePds = () => {
    this.setState({
      showPds: true,
      showUtilities:false,
      dash:"none",
      pdsApp:"block",
      utilities:"none"
    })
  }

  gotoDash=()=>{
    this.setState({
      showPds: true,
      showUtilities:false,
      dash:"block",
      pdsApp:"none",
      utilities:"none"
    })
  }

  gotoUtilities=()=>{
    this.setState({
      showPds: false,
      showUtilities:true,
      dash:"none",
      pdsApp:"none",
      utilities:"block"
    })
  }

  render() {
    return (
      <div>

        <NavEg changePdsToggler={this.changePds} /* changeBOSToggler={this.gotoUtilities} *//>

        <AppContainer>

          <Navigation>
            <SideNav
              selectedPath={this.state.selectedPath}
              theme={theme}
              onItemSelection={this.onItemSelection}
            >
              <Nav id="1" onClick={this.gotoDash}>
                <IconCnt>
                  <Icon icon={dashboard} />
                </IconCnt>
                <Text>DASHBOARD</Text>
              </Nav>
              <Nav id="2">
                <Nav id="1">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F&F</Text>
                </Nav>
                <Nav id="2">
                  <IconCntChild>
                    {/*  <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOS</Text>
                </Nav>
                <Nav id="3">
                  <IconCntChild>
                    {/*  <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLM</Text>
                </Nav>
                <Nav id="4">
                  <IconCntChild>
                    {/*  <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOARD</Text>
                </Nav>
                <IconCnt>
                  <Icon icon={users} />
                </IconCnt>
                <Text>SYSTEM VIEWS</Text>
              </Nav>



              <Nav id="3">
                <Nav id="1">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F&F</Text>
                </Nav>
                <Nav id="2">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOS</Text>
                </Nav>
                <Nav id="3">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PLM</Text>
                </Nav>
                <Nav id="4">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOARD</Text>
                </Nav>
                <IconCnt>
                  <Icon icon={circleO} />
                </IconCnt>
                <Text>NOTIFICATION</Text>
              </Nav>



              <Nav id="4" path="https://www.google.com">
              <Nav id="1">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product Groups</Text>
                </Nav>
                <Nav id="2">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products</Text>
                </Nav>
                <Nav id="3">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RMS Data</Text>
                </Nav>
                <Nav id="4" onClick={this.gotoUtilities}>
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text onClick={this.gotoUtilities}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utilities</Text>
                </Nav>
                <Nav id="5">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enquiries</Text>
                </Nav>
                <Nav id="6">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maintain Offer</Text>
                </Nav>
                <Nav id="7">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products of Offer</Text>
                </Nav>
                <Nav id="8">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reporting</Text>
                </Nav>
                <Nav id="9">
                  <IconCntChild>
                    {/* <Icon icon={users} /> */}
                  </IconCntChild>
                  <Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Miscellaneous</Text>
                </Nav>
                
                <IconCnt>
                  <Icon icon={circleO} />
                </IconCnt>
                <Text>BOS MENU</Text>
              </Nav>


              <Nav id="5">
                <IconCnt>
                  <Icon icon={cubes} />
                </IconCnt>
                <Text>USERS</Text>
              </Nav>

              <Nav id="6">
                <IconCnt>
                  <Icon icon={cubes} />
                </IconCnt>
                <Text>TASKS</Text>
              </Nav>

              <Nav id="7">
                <IconCnt>
                  <Icon icon={cubes} />
                </IconCnt>
                <Text>SETTINGS</Text>
              </Nav>


            </SideNav>
          </Navigation>


          <Body>
            <div style={{  padding:12, display: this.state.dash }}>
              <Dashboard />
            </div>
            <div style={{ display: this.state.pdsApp }}>
              <TableDiv />
            </div>
            <div style={{ display: this.state.utilities }}>
              <Utilities />
            </div>

          </Body>

        </AppContainer>
      </div>
    );
  }
}
