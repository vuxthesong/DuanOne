import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <AudioPlayer className={cx('playing')} src={''} showSkipControls={true} showJumpControls={false} />
        </div>
    );
}

export default Footer;
