import { useState } from 'react';
import SPlay from './SPlay';

function play() {
  const [playing, setPlaying] = useState(false);

  const playPause = () => {
    const song = document.querySelector('.song');
    song.loop = true;
    if (playing === true) {
      song.pause();
      setPlaying(false);
    } else {
      song.play();
      setPlaying(true);
    }
  };
  return (
    <SPlay>
      <input
        className="iconePlay"
        type="image"
        id="play"
        alt="play"
        src="/images/icones/play-button.png"
        onClick={playPause}
      />
      <audio className="song" src="/mp3/Uncatchable.mp3" type="audio">
        <track default kind="captions" />
      </audio>
    </SPlay>
  );
}
export default play;
