import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5998875075b915dba41f22d45b11caa~c5_100x100.jpeg?x-expires=1693116000&x-signature=X7kky6BaJ1xD46CaCNT3u3FL8aw%3D"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Rose</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Rosé</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
