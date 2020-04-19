import React, { Component } from 'react';
import Header from './HeaderComponent';

function Journal() {
    return (
        <>
            <h3 class="text-center">Journal</h3>
            <textarea class="w-100 h-100"></textarea>
        </>
    )
}

function EmergencyContact() {
    return (
        <>
            <h3 class="text-center">Emergency Info</h3>
            <div id="accordion">
                <div class="card m-0">
                    <div class="card-header p-1" id="headingOne">
                        <h5>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                <p class="m-0">Owner</p>
                            </button>
                        </h5>
                    </div>
                    <div class="collapse show" id="collapseOne" aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div class="card-body p-1">
                            <p class="m-0">Dan Haas<br />410-937-2073</p>
                        </div>
                    </div>
                </div>
                <div class="card m-0">
                    <div class="card-header p-1" id="headingOne">
                        <h5>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo">
                                <p class="m-0">Vet</p>
                            </button>
                        </h5>
                    </div>
                    <div class="collapse" id="collapseTwo" aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div class="card-body p-1">
                            <p class="m-0">Claws n Paws Animal Hospital<br />410-579-2918<br />6500 Washington
                                Blvd #101<br />Elkridge MD 21075</p>
                        </div>
                    </div>
                </div>
                <div class="card m-0">
                    <div class="card-header p-1" id="headingOne">
                        <h5>
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree">
                                <p class="m-0">Emergency Vet</p>
                            </button>
                        </h5>
                    </div>
                    <div class="collapse" id="collapseThree" aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div class="card-body p-1">
                            <p class="m-0">410-788-7040<br />32 Mellor Ave #C<br />Catonsville MD 21228</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

class Care extends Component {

    render() {

        return (
            <>
                <Header pageName="Take Care of" dogName="Suede" />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Daily Routine</h2>
                            <ul>
                                <li class="list-group-item">8:00 AM Quick Walk</li>
                                <li class="list-group-item">8:15 AM Breakfast: 2 scoops kibble + fiber</li>
                                <li class="list-group-item">5:00 PM Long Walk</li>
                                <li class="list-group-item">6:00 PM Dinner: 1 scoop kibble + Fiber</li>
                                <li class="list-group-item">8:00 PM Quick Walk</li>
                                <li class="list-group-item">8:15 PM Play Time</li>
                                <li class="list-group-item">8:45 PM Training</li>
                                <li class="list-group-item">9:00 PM Bedtime</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <Journal />
                            </div>
                            <div className="row">
                                <EmergencyContact />
                            </div>                    
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Care;