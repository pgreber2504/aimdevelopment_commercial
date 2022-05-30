import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";
import classes from './SideDrawerItem.module.scss';

const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,

            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
};

const MenuItem = (props) => {
    return (
        <motion.li className={classes['sideDrawer__item']} variants={menuItemVariants}>
            <Link to={props.url} onClick={props.onClick} smooth={true}>
                <span className={classes["text-placeholder"]}>{props.text}</span>
            </Link>
        </motion.li>
    );
};

export default MenuItem;