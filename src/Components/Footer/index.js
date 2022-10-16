import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '~/Context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function Footer() {
    const { song, handleSong } = useContext(Songs);

    const handleClickNext = () => {
        handleSong(song.id + 1);
    };

    const handleClickPrevious = () => {
        handleSong(song.id - 1);
    };

    return (
        <div className={cx('wrapper')}>
            <AudioPlayer
                className={cx('playing')}
                src={song.url}
                showSkipControls={true}
                showJumpControls={true}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
        </div>
    );
}

export default Footer;
