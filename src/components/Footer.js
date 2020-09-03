import React from 'react'
import './Footer.css'
import { Container } from 'reactstrap'
import { Link, BrowserRouter } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <BrowserRouter>
                <Container>
                    <div className="top-services mt-5">
                        <ul className="footer-specs">
                            <li className="spec">
                                <i className="icon icon-cycle"></i>
                                Возможность легко обменять
                            </li>
                            <li className="spec">
                                <i className="icon icon-repair"></i>
                                Бесплатная починка
                            </li>
                            <li className="spec">
                                <i className="icon icon-delivery"></i>
                                Быстрая и Бесплатная доставка</li>
                            <li className="spec">
                                <i className="icon icon-wallet"></i>
                                Оплата наличными
                            </li>
                        </ul>
                    </div>
                    <nav className="footer-menu mt-5">
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">О нас</h4>
                                <li>
                                    <Link to="#">О нас</Link>
                                </li>
                                <li>
                                    <Link to="#">Информация о поставщике машин</Link>
                                </li>
                                <li>
                                    <Link to="#">Информация и правила конфиденциальности в отношении личных данных</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Общее</h4>
                                <li>
                                    <Link to="#">Оплата</Link>
                                </li>
                                <li>
                                    <Link to="#">Правила обмена и возврата</Link>
                                </li>
                                <li>
                                    <Link to="#">Наши магазины</Link>
                                </li>
                                <li>
                                    <Link to="#">Акции и Промо</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Категории</h4>
                                <li>
                                    <Link to="#">Mercedes</Link>
                                </li>
                                <li>
                                    <Link to="#">Audi</Link>
                                </li>
                                <li>
                                    <Link to="#">Lamborghini</Link>
                                </li>
                                <li>
                                    <Link to="#">Bugatti</Link>
                                </li>
                                <li>
                                    <Link to="#">Ferrari</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Личный кабинет</h4>
                                <li>
                                    <Link to="#">Вход в личный кабинет</Link>
                                </li>
                                <li>
                                    <Link to="#">Регистрация</Link>
                                </li>
                                <li>
                                    <Link to="#">Отследить заказ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Контакты</h4>
                                <li>
                                    0 (504) 98 22 11
                                </li>
                                <li>
                                    Время работы: 08:00 - 19:00
                                </li>
                                <li>
                                    <Link to="#">Адрес: ул.Жаманбаева 15а</Link>
                                </li>
                                <ul className="footer-social">
                                    <li className="icon-social">
                                        <Link to="#"><div className="social-facebook" /></Link>
                                    </li>
                                    <li className="icon-social">
                                        <Link to="#"><div className="social-twitter" /></Link>
                                    </li>
                                    <li className="icon-social">
                                        <Link to="#"><div className="social-instagram" /></Link>
                                    </li>
                                    <li className="icon-social">
                                        <Link to="#"><div className="social-youtube" /></Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default Footer
