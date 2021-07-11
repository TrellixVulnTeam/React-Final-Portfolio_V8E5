import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="id-portfolio">
            <span className="divider"></span>
            <h1>Portfolio</h1>
            <ul>
                <li><a href=" " >Tavel Destination</a>
                <br></br>
                <a href=" ">github</a>
                </li>

                <li><a href="https://coeus-share.herokuapp.com/">Tech Help Site</a>
                <br></br>
                <a href="https://github.com/ITJagraj/Tutor-app"> github</a>
                </li>

                <li><a href="https://khadra123.github.io/Travel.map/" >Travel Planner</a>
                <br></br>
                <a href="https://github.com/khadra123/Travel.map">github</a></li>

                <li><a href="https://buckxx1.github.io/Forcast_master/" >Weather Forcaster</a>
                <br></br>
                <a href="https://github.com/buckxx1/Forcast_master">github</a></li>

                <li><a href="https://buckxx1.github.io/Daily_planner/" >Note Taker</a>
                <br></br>
                <a href="https://github.com/buckxx1/Daily_planner">github</a></li>

                <li><a href="https://buckxx1.github.io/code_quiz/" >Code Quiz</a>
                <br></br>
                <a href="https://github.com/buckxx1/code_quiz">github</a></li>
                
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/project-images/travel.map.png" alt="travel.map"/>
                    <h3>Travel Map</h3>
                </div>
                <div className="item">
                    <img src="assets/project-images/tutor-question.png" alt="travel.map"/>
                    <h3>Tech Help App</h3>
                </div>
                <div className="item">
                    <img src="assets/project-images/dailyplanner.png" alt="travel.map"/>
                    <h3>Daily Planner</h3>
                </div>
                <div className="item">
                    <img src="assets/project-images/forcast-master.png" alt="travel.map"/>
                    <h3>Forcast Master</h3>
                </div>
                <div className="item">
                    <img src="assets/project-images/notetaker-2.png" alt="travel.map"/>
                    <h3>Note Taker App</h3>
                </div>
                <div className="item">
                    <img src="assets/project-images/codequiz.png" alt="travel.map"/>
                    <h3>Code Quiz</h3>
                </div>
            </div>
        </div>
    )
}