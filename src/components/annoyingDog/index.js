import React from "react";
import "./Annoying.css"

export default class AnnoyingDog extends React.Component {
    componentDidMount() {
        const annoyingDogNode = document.getElementById('annoying-dog');
        const annoyingDogAudio = document.getElementById('annoying-audio');

        annoyingDogNode.addEventListener("mouseover", function () {
            annoyingDogAudio.play();
        });
        annoyingDogNode.addEventListener("mouseout", function () {
            annoyingDogAudio.pause();
        });
    }

    render() {
        return (
            <>
                <img id="annoying-dog" class="annoying-dog" src="https://static.wikia.nocookie.net/undertale/images/0/0b/Annoying_Dog_sprite.gif" alt="Annoying Dog"></img>
                <audio id="annoying-audio" loop src="//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=a31ee060d6ed9f0f8c0fc05f3255e4cb&id=715238877&stream=1&ts=1454544178.0" preload="auto"></audio>
            </>
        )
    }
}
