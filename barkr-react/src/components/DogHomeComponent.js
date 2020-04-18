import React, {Component} from 'react';
import {Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import Header from './HeaderComponent';

{/*const HomeCarouselComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    
    const slides = [
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key="0" >
                <p>Hi, I'm Suede! I am a 4 1/2 year old girl.  I love treats, am friendly with people, and know a lot of tricks.   I like going to the dog park, but please keep in mind I generally like my space from other dogs, so keep an eye on me if you see another dog.</p>
            </CarouselItem>
            ,
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key="1" >
                <NavItem>
                    <NavLink className="nav-link" to="/talk">
                        <i className="fa fa-comment">Talk to Me</i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/adventure">
                        <i className="fa fa-tree">Let's Adventure</i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/care">
                        <i className="fa fa-heart">Care for Me</i>
                    </NavLink>
                </NavItem>
                <Button>Talk To Me</Button>
                <Button>Let's Adventure</Button>
                <Button>Care for Me</Button>
            </CarouselItem>
    ]

    return(
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    )
}*/}

class DogHome extends Component {

    render() {

        return(
            <div className="container h-100">
                <div className="row h-12-5">
                    <div className="col-12 bg-warning">
                        <Header />
                    </div>
                </div>

                <div className="row h-50">
                    <div className="col-12">
                        <div className="d-flex flex-column position-relative overflow-hidden" id="dog-card">
                            <img id="dog-home-img" className="img-fluid d-sm-none" src="assets/img/suede-on-bed.jpg"></img>
                            <img id="dog-home-img" className="img-fluid d-none d-sm-block d-md-none" src="assets/img/suede-on-bed-800x800.jpg"></img>
                            <img id="dog-home-img" className="img-fluid d-none d-md-block" src="assets/img/suede-on-bed-1000x800.jpg"></img>
                            <h1 id="dog-name" className="position-absolute text-danger w-100">Suede</h1>
                        </div>
                    </div>
                </div>

                <div className="row h-25">
                    <div className="col-12 bg-white">
                        <p>Hi there, I'm Suede! I am a 4 1/2 year old girl.  I love treats, am friendly with people, and know a lot of tricks.   I like going to the dog park, but outside the park I need space from other dogs.</p>
                    </div>
                </div>
                <div className="row h-12-5">
                    <div className="col-6">
                        <div id="social-media">
                            <Link to="instagram.com">
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link to="facebook.com">
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link to="twitter.com">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link to="youtube.com">
                                <i className="fa fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <Link to="/care">
                            <Button className="bg-danger">
                                Emergency
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogHome;