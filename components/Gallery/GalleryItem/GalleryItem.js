import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


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
        opacity: 0,
        position: 'relative',
    },
    center: {
        zIndex: 1,
        opacity: 1,
        position: 'relative',
    },
    exit: {
        zIndex: 0,
        opacity: 0,
        position: 'relative',
    }
};

const GalleryItem = (props) => {
    return (
        <>
            <AnimatePresence initial={false} custom={props.direction} exitBeforeEnter={props.fullscreen}>
                <motion.div
                    key={props.page}
                    data-testid='GalleryItem.div'
                    custom={props.direction}
                    variants={props.fullscreen ? fullscreenVariants : variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 0.4 }
                    }}
                >
                    <Image
                        data-testid='GalleryItem.img'
                        src={props.src}
                        alt={props.alt}
                        layout='fill'
                        placeholder='blur'
                    />
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default GalleryItem