import { motion } from "framer-motion";
import classes from './SideDrawerButton.module.scss';

const Path = ({ openPath, closedPath, isOpen, ...rest }) => {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            animate={isOpen ? { d: openPath } : { d: closedPath }}
            transition={{ duration: 0.3 }}
            {...rest}
        ></motion.path>
    );
};

const SideDrawerButton = (props) => {
    return (
        <button className={classes.sideDrawerButton} onClick={props.toggle}>
            <svg width="23" height="23" viewBox="0 -2 23 23">
                <Path isOpen={props.isOpen} openPath="M 3 19.5 L 21 2.5" closedPath="M 2 2.5 L 21.8 2.5" />
                <Path isOpen={props.isOpen} closedPath="M 2 9.423 L 21.8 9.423" openPath="M -1 -3 L -3 0" />
                <Path isOpen={props.isOpen} closedPath="M 2 16.346 L 21.8 16.346" openPath="M 3 2.5 L 21 19.5" />
            </svg>
        </button>
    );
};

export default SideDrawerButton;