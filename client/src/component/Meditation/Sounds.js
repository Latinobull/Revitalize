import React, {useState} from "react";
import Sound from "react-sound";
import Rain from "../../assets/sounds/raindrops.mp3";
import Forest from "../../assets/sounds/forest.mp3";


const PlaySound=(
    handleSongLoading, 
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [forestPlaying, setForestPlaying] = useState(false)
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
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Rain' : 'Stop'}</button>
            <br></br>
            <Sound url={Forest}
            playStatus={
                forestPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={handleSongPlaying}
            onLoading={handleSongLoading}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
            <button onClick={() => setForestPlaying(!forestPlaying)}>{!forestPlaying ? 'Forest' : 'Stop'}</button>
        </div>
    );
};

export default PlaySound;