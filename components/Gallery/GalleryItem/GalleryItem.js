import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

// export default React.memo(GalleryItem)


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
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
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Example = (props) => {

    return (
        <>
            <AnimatePresence initial={false} custom={props.direction}>
                <motion.img
                    key={props.page}
                    src={props.src}
                    custom={props.direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            props.paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            props.paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
        </>
    );
};

export default Example