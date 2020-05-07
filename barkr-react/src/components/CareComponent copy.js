import React, { useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Header from './HeaderComponent';
import Consumer from "./configContext";

function DailyCare(props) {

    const chosenDog=props.chosenDog;

    const routineMap = chosenDog.routine.map(item => {
        return(
            <div key={item.id}>
                <ListGroupItem>{item.detail}</ListGroupItem>
            </div>
        )
    })

    const supplyMap = chosenDog.supplies.map(item => {
        return(
            <div key={item.id}>
                <ListGroupItem>{item.detail}</ListGroupItem>
            </div>
        )
    })

    return (
        <Card>
            <CardBody>
                <CardTitle><h2>Daily Care</h2></CardTitle>
                <CardSubtitle><h4>Routine</h4></CardSubtitle>
                <ListGroup>
                    {routineMap}                                
                </ListGroup>
                <br/>
                <CardSubtitle><h4>Supplies</h4></CardSubtitle>                
                <ListGroup>
                    {supplyMap}
                </ListGroup>
            </CardBody>
        </Card>
    )
}

function Journal(props) {
    const chosenDog=props.chosenDog;

    const journalNotes = chosenDog.notes.map(entry => {
        return (
            <div key={entry.id}>
                <ListGroupItem>{entry.content}</ListGroupItem>
            </div>
            )
        })

    return (
        <Card>
            <CardBody>
                <CardTitle><h2>Journal</h2></CardTitle>
                <CardSubtitle>
                    <h4>Notes</h4>                    
                </CardSubtitle>
                <ListGroup>                    
                    <>
                        {journalNotes}
                    </>
                </ListGroup>
                <Form>
                    <FormGroup>
                        <Label>Add Note</Label>
                        <Input type="textarea" name="notes" id="notes"></Input>
                    </FormGroup>
                    <Button>Save Note</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

const EmergencyContact = (props) => {
    const chosenDog=props.chosenDog;

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const mapTabs = chosenDog.contacts.map(entry => {
        const tabNo=(entry.id+1).toString();
        return(
            <div key={entry.id} id={entry.id}>
                <NavItem>
                    <NavLink
                    id="barkr-tab"
                    className={{ active: activeTab === tabNo, "bg-danger text-white":entry.emergencyVet}}
                    onClick={() => { toggle(tabNo) }} 
                    >
                    {entry.tabName}
                    </NavLink>
                </NavItem>
            </div>
        )
    })

    const mapTabPanes = chosenDog.contacts.map(entry => {
        const tabNo=(entry.id+1).toString();
        return(
            <div key={entry.id}>
                <TabPane tabId={tabNo} className={{"d-none": activeTab!==tabNo, active: activeTab===tabNo }}>  
                    <Card className={{"bg-danger text-white":entry.emergencyVet}}>
                        <CardBody>
                            <CardTitle>
                                <h3>{entry.tabName}</h3>
                            </CardTitle>
                            <CardText>
                                {entry.tabContent}
                            </CardText>
                        </CardBody>
                    </Card>
                </TabPane>
            </div>
        )
    })

    return (
        <>
            <Nav tabs>
                <>
                    {mapTabs}
                </>
            </Nav>

            <TabContent activeTab={activeTab}>
                <>
                    {mapTabPanes}
                </>
            </TabContent>
        </>
    )
}

function Care (props) {

    const chosenDog=props.chosenDog;

    return (
        <Consumer>
            {context => {
                return(
                    <>
                        <Header pageName="Take Care of" dogName={context.chosenDog.name} />
                        <div className="container">
                            <div className="row h75vh overflow-auto">
                                <div className="col-12 col-md-6 m-auto">
                                    <DailyCare chosenDog={context.chosenDog} />
                                </div>
                                <div className="col-12 col-md-6 m-auto">
                                    <Journal chosenDog={context.chosenDog} />
                                    <br />
                                    <EmergencyContact chosenDog={context.chosenDog} />             
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </Consumer>
    )
}

export default Care;