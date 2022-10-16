import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import Song from '../Song';
import styles from './ListSong.module.scss';
import { Songs } from '~/Context';

const cx = classNames.bind(styles);

function ListSong() {
    const { Data, handleSong, song } = useContext(Songs);
    const ListSong = Data;
    const [idSong, setidSong] = useState();

    // console.log(Song);

    const handlePlaySong = (idSong) => {
        setidSong(idSong);
        handleSong(idSong);
    };

    useEffect(() => {
        setidSong(song.id);
    }, [song]);

    return (
        <div className={cx('wrapper')}>
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
                    <Song
                        check={idSong === song.id}
                        key={song.id}
                        id={song.id}
                        title={song.name}
                        author={song.author}
                        onClick={() => handlePlaySong(song.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListSong;
