import React, { useState } from 'react';


const initialValue = {
    isShow: false,
    closeModal: () => { },
    showModal: () => { }
}

const ModalContext = React.createContext(initialValue);


export const ModalContextProvider = (props) => {
    const [isShow, setIsShow] = useState(false);

    const closeModal = () => {
        setIsShow(false)
    }

    const showModal = () => {
        setIsShow(true)
    }

    const exportedValue = {
        isShow,
        closeModal,
        showModal,
    }

    return (
        <ModalContext.Provider value={exportedValue}>
            {props.children}
        </ModalContext.Provider>
    )


}

export default ModalContext