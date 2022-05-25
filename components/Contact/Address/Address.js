import React from 'react'

const Address = () => {
    return (
        <address className="contact-localization">
            <div className="address--line"><strong>Adres:</strong> Łódź, ul.Sportowa 2</div>
            <div className="address--line"><strong>Telefon:</strong> 513-513-513</div>
            <div className="address--line"><strong>E-Mail:</strong> dsdasd@dadas.com</div>
            <div className="address--icons">
                <a href="#">
                    <svg>
                        <use xlinkHref="img/icons.svg#icon-facebook"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg>
                        <use xlinkHref="img/icons.svg#icon-instagram"></use>
                    </svg>
                </a>
            </div>
        </address>
    )
}

export default Address