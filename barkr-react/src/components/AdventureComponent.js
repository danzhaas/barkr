import React, {Component} from 'react';
import Header from './HeaderComponent';
import { Link } from 'react-router-dom';

function AdventureSearch() {

    return (
        <div className="overflow-scroll">
            <script async src="https://cse.google.com/cse.js?cx=011008517122385517076:oeslk2omfyr"></script>	
            <div class="gcse-search"></div>	
        </div>
    )
}

function AdventureMap() {
    return(
        <div className="embed-responsive embed-responsive-1by1">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J75h137lZpMDdLeovFbWOkHCl_YZDRlg"	allowfullscreen></iframe>	
        </div>
    )
}


class Adventure extends Component {

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
                        <h1>Adventure With Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" id="adventure-main">
                        <AdventureSearch />
                        <AdventureMap />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" id="adventure-buttons">
                        <Link>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Adventure;