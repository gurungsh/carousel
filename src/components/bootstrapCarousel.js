import React, { Component } from 'react';

import './styles.css';

class BootstrapCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstImage: this.props.images[0],
            images: this.props.images.slice(1),
        }
    };
    render() {
        return (
            <div id="carousel-bootstrap" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={this.state.firstImage} alt="First slide" />
                    </div>

                    {this.state.images.map((imageSource, index) =>
                        <div className="carousel-item" key ={index}>
                            <img className="d-block w-100" src={imageSource} alt=""/>
                        </div>)}
                </div>
                <a className="carousel-control-prev" href="#carousel-bootstrap" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-bootstrap" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    };
}

export default BootstrapCarousel;