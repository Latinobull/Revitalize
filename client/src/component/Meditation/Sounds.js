import React, {useState} from "react";
import Sound from "react-sound";
import Rain from "../../assets/sounds/raindrops.mp3";
import Forest from "../../assets/sounds/forest.mp3";
import Birds from "../../assets/sounds/birds.mp3";
import "./style.css";


const PlaySound=(
    handleSongLoading, 
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [forestPlaying, setForestPlaying] = useState(false)
    const [birdsPlaying, setBirdsPlaying] = useState(false)
    return (
        <div>
            <Sound url={Rain}
            playStatus={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={handleSongPlaying}
            onLoading={handleSongLoading}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
            <button className="rainSound" onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Rain' : 'Stop'}</button>
            <br></br>
            <Sound url={Forest}
            playStatus={
                forestPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={handleSongPlaying}
            onLoading={handleSongLoading}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
            <button className="forestSound" onClick={() => setForestPlaying(!forestPlaying)}>{!forestPlaying ? 'Forest' : 'Stop'}</button>
            <br></br>
            <Sound url={Birds}
            playStatus={
                birdsPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={handleSongPlaying}
            onLoading={handleSongLoading}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
            <button className="birdSound" onClick={() => setBirdsPlaying(!birdsPlaying)}>{!birdsPlaying ? 'Birds' : 'Stop'}</button>
        </div>
    );
};

export default PlaySound;