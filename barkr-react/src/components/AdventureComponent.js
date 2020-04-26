import React, { useState } from 'react';
import Header from './HeaderComponent';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Consumer from "./configContext";

function AdventureSearch() {

    return (
        <div id="searchDiv" className="overflow-scroll mh-100">
            <div class="gcse-search" ></div>
        </div>
    )
}

function AdventureMap() {
    return (
        <div id="mapDiv" className="embed-responsive embed-responsive-1by1">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J75h137lZpMDdLeovFbWOkHCl_YZDRlg" ></iframe>
        </div>
    )
}


const Adventure = (props) => {

    const chosenDog=props.chosenDog;

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    function googleCseSearch(ZIP) {
        document.getElementById("gsc-i-id1").value=("dog events "+ZIP);
        document.querySelector(".gsc-search-button-v2").click();
    }

    return (
        <Consumer>
            {context => {
                return(
                    <>
                        <Header pageName="Adventure with" dogName={context.chosenDog.name} />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mh-100 p-0" id="adventure-main">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                id="barkr-tab"
                                                className={{ active: activeTab === '1' }}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                <h3>Dog Parks</h3>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                id="barkr-tab"
                                                className={{ active: activeTab === '2' }}
                                                onClick={() => { toggle('2'); googleCseSearch(context.chosenDog.ZIP) }}
                                            >
                                                <h3>Nearby Events</h3>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <AdventureMap />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <AdventureSearch />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </Consumer>
    )
}

export default Adventure;