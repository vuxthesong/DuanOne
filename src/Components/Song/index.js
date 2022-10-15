import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Song.module.scss';
const cx = classNames.bind(styles);

function Song({ id, title, author, onClick, check }) {
    // console.log(check);
    return (
        <div className={cx('wrapper', { active: check })} onClick={onClick}>
            <div className={cx('id')}>{id}</div>
            <div className={cx('title')}>{title}</div>
            <div className={cx('author')}>{author}</div>
            <div className={cx('down')}>
                <FontAwesomeIcon icon={faCircleDown} />
            </div>
        </div>
    );
}

export default Song;
