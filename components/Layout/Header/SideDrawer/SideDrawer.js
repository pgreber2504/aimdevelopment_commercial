import SideDrawerButton from "./SideDrawerButton/SideDrawerButton";
import SideDrawerList from "./SideDrawerList/SideDrawerList";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import classes from './SideDrawer.module.scss';
import { Fragment } from "react";

const sidebarVariants = {
    open: {
        clipPath: `circle(120% at 0 0)`,
        zIndex: 3,
        transition: {
            duration: 0.4,
        }
    },
    closed: {
        clipPath: `circle(1px at 0 0)`,
        zIndex: 3,
        transition: {
            delay: 0.4
        }
    },
};

const SideDrawer = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <Fragment>
            <SideDrawerButton isOpen={isOpen} toggle={() => toggleOpen()} />
            <motion.div className={classes.sideDrawer} initial={false} animate={isOpen ? "open" : "closed"} exit={'closed'}>
                <AnimatePresence >
                    {isOpen && (
                        <motion.div className={classes.sideDrawerBackground} initial='closed' animate={'open'} exit={'closed'} variants={sidebarVariants}></motion.div>)}
                </AnimatePresence>
                <AnimatePresence>
                    {isOpen && <SideDrawerList onClick={() => toggleOpen()} />}
                </AnimatePresence>
            </motion.div>
        </Fragment >

    );
}


export default SideDrawer