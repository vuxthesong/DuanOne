import DetailSong from '../DetailSong';
import ListSong from '../ListSong';

import classNames from 'classnames/bind';
import styles from './Main.module.scss';
const cx = classNames.bind(styles);

function Main() {
    return (
        <main className={cx('wrapper')}>
            <DetailSong />
            <ListSong />
        </main>
    );
}

export default Main;
