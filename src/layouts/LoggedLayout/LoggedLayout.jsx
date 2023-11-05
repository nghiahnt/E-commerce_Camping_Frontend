import classNames from 'classnames/bind';
import styles from './LoggedLayout.module.scss';
import { useSelector } from 'react-redux';

import { Footer, Navbar } from '../components';
import { Button, Avatar } from '../../components';

const cx = classNames.bind(styles);

function FooterOnly({ Page, ...childrens }) {
    const state = useSelector((state) => state.handleCart);

    return (
        <div className={cx('wrapper')}>
            <Navbar>
                <Button content="Publish" link="#" className="fa-solid fa-upload" />
                <Button
                    content="Cart"
                    className="fa fa-cart-shopping mr-1"
                    cart={state.length}
                    link="cart"
                />
                <Avatar link="/profile" height="30" />
            </Navbar>

            <div className={cx('wrapper-container')}>
                <div className={cx('content')}>{Page}</div>
            </div>
            <Footer />
        </div>
    );
}

export default FooterOnly;
