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
            <div className="container">
                <div classname="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
                <div classname="row">
                    <div className="col-12">
                        <div id="dog-card">
                            <img id="dog-pic" src=""></img>
                            <h1 id="dog-name">Suede</h1>
                        </div>
                    </div>
                </div>
                <div classname="row">
                    <div className="col-12">
                        <p>Hi, I'm Suede! I am a 4 1/2 year old girl.  I love treats, am friendly with people, and know a lot of tricks.   I like going to the dog park, but please keep in mind I generally like my space from other dogs, so keep an eye on me if you see another dog.</p>
                    </div>
                </div>
                <div classname="row">
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
                            <Button>Emergency</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogHome;