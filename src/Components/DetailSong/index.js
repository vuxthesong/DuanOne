import classNames from 'classnames/bind';
import styles from './DetailSong.module.scss';
const cx = classNames.bind(styles);

function DetailSong() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('now')}>Now Playing</div>
            <div className={cx('name-song')}>Name Song</div>
            <div className={cx('info')}>
                <img
                    className={cx('img')}
                    src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                    alt="s"
                ></img>
            </div>
            <div className={cx('info1')}>
                <img
                    className={cx('avarta')}
                    src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
                    alt="s"
                ></img>
                <div className={cx('author')}>Name Author</div>
            </div>
        </div>
    );
}

export default DetailSong;
