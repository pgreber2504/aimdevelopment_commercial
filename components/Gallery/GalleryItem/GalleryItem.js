import React from 'react';
import { motion, AnimatePresence } from "framer-motion";


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 2000 : -2000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 2000 : -2000,
            opacity: 0
        };
    }
};

const fullscreenVariants = {
    enter: {
        zIndex: 0,
        opacity: 0
    },
    center: {
        zIndex: 1,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        opacity: 0
    }
};

const GalleryItem = (props) => {
    return (
        <>
            <AnimatePresence initial={false} custom={props.direction} exitBeforeEnter={props.fullscreen}>
                <motion.img
                    key={props.page}
                    src={props.src}
                    custom={props.direction}
                    variants={props.fullscreen ? fullscreenVariants : variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.4 }
                    }}
                />
            </AnimatePresence>
        </>
    );
};

export default GalleryItem