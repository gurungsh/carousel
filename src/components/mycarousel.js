import React, { Component } from 'react';

import './styles.css';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            currentIndex: 0,
            translateValue: 0,
        };
    };

    //go to previous slide
    prevSlide = () => {
        //check if this is the first slide and loop to the end
        if (this.state.currentIndex === 0)
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: -(this.slideWidth() * (this.state.images.length - 1)),
            });

        //else update index and translate value
        var prevState = this.state;
        this.setState({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth(),
        });
    };

    //go to next slide
    nextSlide = () => {
        //check if it is the last slide, if true return to first
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0,
            });
        }

        //else update index and translate value
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - this.slideWidth(),
        }));
    };

    //get slide width
    slideWidth = () => {
        //can be hardcoded too because all images are same size and the value is already hardcoded on the css
        return document.querySelector('.slide').clientWidth;
    };

    render() {
        return (
            <div className="slider">
                <div className="slide-wrapper" style={{
                    transform: `translateX(${this.state.translateValue}px)`, transition: 'transform ease-out 0.45s'
                }}>
                    {this.state.images.map((image, i) =>
                        <Slide key={i} image={image}></Slide>)}
                </div>
                <PreviousButton prevSlide={this.prevSlide} />
                <NextButton nextSlide={this.nextSlide} />
            </div>
        );
    };
}

//Slide, PreviousButton, and NextButton 
//Background image changes
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="slide" style={styles}></div>

    );
};

//OnClick > previous slide change
const PreviousButton = props => {
    return (
        <div className="prevButton" onClick={props.prevSlide}>
            &#8249;
        </div>
    );
};

//OnClick > next slide change
const NextButton = props => {
    return (
        <div className="nextButton" onClick={props.nextSlide}>
            &#8250;
    </div>
    );
}

export default MyCarousel;