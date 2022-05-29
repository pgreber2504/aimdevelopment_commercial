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
    console.log(props.fullscreen);
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
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                />
            </AnimatePresence>
        </>
    );
};

export default GalleryItem