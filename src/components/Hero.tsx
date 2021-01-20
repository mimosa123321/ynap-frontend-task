import { useScroll } from '../hooks/useScroll';

import "../styles/styles.scss";
import {useEffect} from "react";

const Hero = () => {
    const { scrollPosition, addScrollHandler, removeScrollHandler } = useScroll();

    useEffect( () => {
        addScrollHandler();
    }, []);

    useEffect( () => {
        // console.log(scrollPosition);
    }, [scrollPosition])

    return (
        <div className="hero-container">
            <div className="hero-container-cover">
                <div className="contents">
                    <div className="type">cover story</div>
                    <div className="title">standing strong</div>
                    <div className="author"><i>with<br/>Danal Gurlen</i></div>
                </div>
            </div>

        </div>
    );
}

export default Hero;
