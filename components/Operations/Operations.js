import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import classes from './Operations.module.scss'
import OperationsContent from './OperationsContent/OperationsContent'
import OperationsTab from './OperationsTab/OperationsTab';
import { OPERATIONS_DATA } from '../../constants/operations-data';


const Operations = () => {
    const [operationNumber, setOperationNumber] = useState(0);

    const operationTabs = OPERATIONS_DATA.map((el, index) => (
        <OperationsTab
            key={index}
            title={el.operation}
            titleNumber={el.id}
            className={index === operationNumber && 'active'}
            onClick={() => setOperationNumber(index)}
        />
    )
    )

    return (
        <div className={classes["operations"]}>
            <div className={classes["operations__tab-container"]}>
                {operationTabs}
            </div>
            <AnimatePresence exitBeforeEnter>
                <OperationsContent
                    key={OPERATIONS_DATA[operationNumber].id}
                    title={OPERATIONS_DATA[operationNumber].title}
                    description={OPERATIONS_DATA[operationNumber].description}
                    iconId={OPERATIONS_DATA[operationNumber].iconId}
                />
            </AnimatePresence>
        </div>
    )
}

export default React.memo(Operations)