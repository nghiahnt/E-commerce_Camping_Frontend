import { NavLink } from 'react-router-dom';
import images from '../../assets/img';

function Avatar(children) {
    return (
        <>
            <NavLink to={children.link}>
                <img
                    className="rounded-circle"
                    height={children.height}
                    src={images.user}
                    alt="trongnghia"
                />
            </NavLink>
        </>
    );
}

export default Avatar;
