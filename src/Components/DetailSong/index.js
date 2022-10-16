import classNames from 'classnames/bind';
import { useContext } from 'react';
import styles from './DetailSong.module.scss';
import { Songs } from '~/Context';

const cx = classNames.bind(styles);

function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('now')}>Now Playing</div>
            <div className={cx('name-song')}>{song.name}</div>
            <div className={cx('info')}>
                <img className={cx('img')} src={song.links.images[0].url} alt="s"></img>
            </div>
            <div className={cx('info1')}>
                <img className={cx('avatar')} src={song.links.images[1].url} alt="s"></img>
                <div className={cx('author')}>{song.author}</div>
            </div>
        </div>
    );
}

export default DetailSong;
