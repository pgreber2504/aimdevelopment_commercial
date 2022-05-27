
import React, { useState } from 'react'
import { motion } from 'framer-motion'




const Image = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadedImg = () => {
        setIsLoaded(true)
    }

    return (
        <motion.img
            src={props.src}
            alt={props.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            onLoad={loadedImg}
        // transition={{ duration: 0.5 }}
        />)
}

export default Image