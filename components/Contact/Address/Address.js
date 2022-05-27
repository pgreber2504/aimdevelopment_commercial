import React from 'react'
import classes from './Address.module.scss';

const Address = (props) => {
    return (
        <address className={classes.address}>
            <div className={classes["address--line"]}><strong>Adres: </strong>{props.address}</div>
            <div className={classes["address--line"]}><strong>Telefon: </strong>{props.phone}</div>
            <div className={classes["address--line"]}><strong>E-Mail: </strong>{props.email}</div>
            <div className={classes["address--icons"]}>
                <a href="#">
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-facebook"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-instagram"></use>
                    </svg>
                </a>
            </div>
        </address>
    )
}

export default React.memo(Address)