import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useSelector } from 'react-redux';

import { Navbar, Footer } from '../../layouts/components';
import { Button } from '../../components';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const state = useSelector((state) => state.handleCart);

    return (
        <div className={cx('wrapper')}>
            <Navbar>
                <Button
                    content="Login"
                    className="fa fa-sign-in-alt mr-1"
                    link="/login"
                />
                <Button
                    content="Cart"
                    className="fa fa-cart-shopping mr-1"
                    cart={state.length}
                    link="cart"
                />
            </Navbar>
            <div className={cx('wrapper-container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
