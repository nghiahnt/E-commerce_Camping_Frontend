import { NavLink } from 'react-router-dom';

function Button({ cart, ...children }) {
    return (
        <>
            <NavLink
                to={children.link}
                className={'btn btn-outline-dark m-2'}
                style={{
                    backgroundColor: '#fff',
                    color: '#000',
                }}
            >
                <i className={children.className}></i>
                {children.content} {cart}
            </NavLink>
        </>
    );
}

export default Button;
