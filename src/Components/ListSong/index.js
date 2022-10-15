import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import Song from '../Song';
import styles from './ListSong.module.scss';
import { Songs } from '~/Context';

const cx = classNames.bind(styles);

function ListSong() {
    const ListSong = useContext(Songs);
    const [idSong, setidSong] = useState(1);
    return (
        <table className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('id')}>#</div>
                <div className={cx('title')}>Title</div>
                <div className={cx('author')}>Author</div>
                <div className={cx('down')}>
                    <FontAwesomeIcon icon={faCircleDown} />
                </div>
            </div>
            <div className={cx('list-song')}>
                {ListSong.map((song) => (
                    <Song id={song.id} title={song.name} author={song.author} />
                ))}
            </div>
        </table>
    );
}

export default ListSong;
