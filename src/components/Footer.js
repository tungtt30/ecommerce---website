import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'



const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]


const footerCustomerLink = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Bảo hành",
        path: "/about"
    },
    {
        display: "Hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">
                            Hotline
                        </div>
                        <div className="footer__content">
                            <p>Liên hệ đặt hàng: <strong>+84 0999 999 999</strong></p>
                            <p>Tra cứu đơn hàng: <strong>+84 0999 999 999</strong></p>
                            <p>Góp ý, khiếu nại: <strong>+84 0999 999 999</strong></p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Về Cửa hàng
                        </div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path} >
                                        {item.display}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Chính sách
                        </div>
                        <div className="footer__content">
                            {footerCustomerLink.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path} >
                                        {item.display}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='footer__about'>
                        <p>
                            <Link to="/">
                                <img src={logo} className='footer__logo' alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mạng lại niềm vui cho hàng triệu khách hàng
                            Hãy cùng GodCloser hướng đến cuộc sống năng động, tích cực hơn
                        </p>
                    </div>
                </Grid>
            </div>
        </footer >
    )
}

export default Footer