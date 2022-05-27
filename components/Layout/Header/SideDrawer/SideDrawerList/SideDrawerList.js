import { motion } from "framer-motion";
import SideDrawerItem from '../SideDrawerItem/SideDrawerItem'
import classes from './SideDrawerList.module.scss'
import { NAV__LINKS__DATA } from '../../../../../constants/nav-data';

const navigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const SideDrawer = (props) => {
    return (
        <motion.ul className={classes['sideDrawer__list']} variants={navigationVariants} initial='closed' animate='open' exit={'closed'}>
            {NAV__LINKS__DATA.map((el, i) => (
                <SideDrawerItem onClick={props.onClick} key={i} text={el.text} url={el.url} />
            ))}
        </motion.ul>
    );
};

export default SideDrawer;