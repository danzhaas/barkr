import React, { Component } from 'react';
//import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Header from './HeaderComponent';

{/*
function CommandCards(props) {
    
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody> 
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
};    
*/}

class Talk extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {

        return (
            <div className="container">
                <div classname="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
                <div classname="row">
                    <div className="col-12">
                        <h1>Talk to Me</h1>
                    </div>
                </div>
                <div className="row">
                    {/*<div className="col-12">*/}
                    {/* Replace hard-coded cards below with <CommandCards /> when State is added*/}
                    <div class="col-12 d-flex flex-wrap justify-content-around">
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/balance.gif"
                                autoplay loop muted playsinline>
                                <source src="media/balance.mp4" type="video/mp4"></source>
                                <img src="img/balance.gif" title=""></img>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Balance"</h5>
                                <p class="card-text">Place a treat on top of my nose. See how patient I am?</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/come.gif"
                                autoplay loop muted playsinline>
                                <source src="media/come.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Come"</h5>
                                <p class="card-text">No, you stay there, I'll come to you.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/down.gif.gif"
                                autoplay loop muted playsinline>
                                <source src="media/down.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Down"</h5>
                                <p class="card-text">Time to take a load off.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/hi-five.gif"
                                autoplay loop muted playsinline>
                                <source src="media/hi-five.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"High-five"</h5>
                                <p class="card-text">Up top.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/paws-up.gif"
                                autoplay loop muted playsinline>
                                <source src="media/paws-up.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Paws Up"</h5>
                                <p class="card-text">Let's see what's up here.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/play-dead.gif"
                                autoplay loop muted playsinline>
                                <source src="media/play-dead.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Play Dead"</h5>
                                <p class="card-text">I will roll halfway over with my paws in the air. Don't worry, I'm not really dead.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/roll-over.gif"
                                autoplay loop muted playsinline>
                                <source src="media/roll-over.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Roll Over"</h5>
                                <p class="card-text">Also known as "a barrel roll".</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/shake.gif"
                                autoplay loop muted playsinline>
                                <source src="media/shake.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Shake"</h5>
                                <p class="card-text">Nice to meet you.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/sit.gif" autoplay
                                loop muted playsinline>
                                <source src="media/sit.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Sit"</h5>
                                <p class="card-text">I plant my butt.</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/speak.gif"
                                autoplay loop muted playsinline>
                                <source src="media/speak.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Speak"</h5>
                                <p class="card-text">"Hi"</p>
                            </div>
                        </div>
                        <div class="card col-5">
                            <video class="card-img-top embed-responsive embed-responsive-1by1" poster="img/touch.gif"
                                autoplay loop muted playsinline>
                                <source src="media/touch.mp4" type="video/mp4"></source>
                            </video>
                            <div class="card-body">
                                <h5 class="card-title">"Touch"</h5>
                                <p class="card-text">I'll boop your hand, even if I have to jump for it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Talk;