import React, { Fragment } from 'react'
import classes from './AboutItem.module.scss'

const AboutItem = (props) => {

    if (props.reversed) {
        return (
            <Fragment>
                <div className={classes["about__feature"]}>
                    <div className={classes["about__icon"]}>
                        <svg>
                            <use xlinkHref="images/icons.svg#icon-home"></use>
                        </svg>
                    </div>
                    <h5 className={classes["about__header"]}>{props.title}</h5>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className={classes["about__img--container"]}>
                    <img
                        src={props.img}
                        data-src={props.dataImg}
                        alt={props.alt}
                    />
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className={classes["about__img--container"]}>
                <img
                    src={props.img}
                    data-src={props.dataImg}
                    alt={props.alt}
                />
            </div>
            <div className={classes["about__feature"]}>
                <div className={classes["about__icon"]}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-home"></use>
                    </svg>
                </div>
                <h5 className={classes["about__header"]}>{props.title}</h5>
                <p>
                    {props.description}
                </p>
            </div>
        </Fragment>
    )
}

export default AboutItem