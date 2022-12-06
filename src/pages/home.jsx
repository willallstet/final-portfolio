import React from 'react';

function Home() {
    return (
        <div className='bricks'>
            <div className='brickHomepage'>
                <img className='sampleImg' src='https://i.imgur.com/8PB7tdj.jpg'></img>
                <div class="overlay">
                    <div class="overlayText">soundtable</div>
                </div>
            </div>
            <div className='brickHomepage'>
                <img className='sampleImg' src='https://i.imgur.com/A50iPdN.png'></img>
                <div class="overlay">
                <div class="overlayText">the map is not the territory</div>
                </div>
            </div>
            <div className='brickHomepage'>
                <img className='sampleImg' src='https://i.imgur.com/rmVfAdn.jpg'></img>
                <div class="overlay">
                    <div class="overlayText">cyanobacteria sonification</div>
                </div>
            </div>
            <a href="/iterative">
            <div className='brickHomepage'>
                <img className='sampleImg' src='https://i.imgur.com/IhzeKR3.png'></img>
                <div class="overlay">
                    <div class="overlayText">andi design</div>
                </div>
            </div>
            </a>
        </div>
    );
}

export default Home;