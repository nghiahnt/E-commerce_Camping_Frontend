import classNames from 'classnames/bind';
import styles from './PaymentModal.module.scss';

const cx = classNames.bind(styles);

function PaymentModal(children) {

    return (
        <div>
            <div className={cx('payment-modal')}>
                <div className="row">
                    <div className="col-md-11">
                        <h3 className="text-center ml-5">Add new card</h3>
                    </div>
                    <button className={cx('col-md-1 mt-1 close')}
                        onClick={children.handleClose}
                    >
                        <i className={cx('fa-solid fa-xmark')}></i>
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="name-on-card" className="form-label">
                            Name on card
                        </label>
                        <input
                            type="text"
                            id="name-on-card"
                            className="form-control"
                            placeholder="NGUYEN VAN A"
                            required
                        />
                        <small className="text-muted">
                            Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="payment-number" className="form-label">
                            Credit card number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="payment-number"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="cc-expiration" className="form-label">
                            Expiration
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="cc-cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required
                        />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mb-1">
                    <div className="col-md-12">
                        <button className={cx('payment-button')}>
                            <h5 className='mt-2' onClick={children.handleClose} >Save</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;
