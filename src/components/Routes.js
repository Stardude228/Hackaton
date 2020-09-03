import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';

//? Auth
// const Login = React.lazy(() => import('../pages/auth/Login'));
// const Logout = React.lazy(() => import('../pages/auth/Logout'));
// const Register = React.lazy(() => import('../pages/auth/Register'));

//? Pages
const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const AboutUs1 = React.lazy(() => import('../pages/AboutUsPages/AboutUs1'));
const AboutUs2 = React.lazy(() => import('../pages/AboutUsPages/AboutUs2'));
const AboutUs3 = React.lazy(() => import('../pages/AboutUsPages/AboutUs3'));
const AboutUs4 = React.lazy(() => import('../pages/AboutUsPages/AboutUs4'));
const Sale = React.lazy(() => import('./navbar/sale/Sale'));
const Contact = React.lazy(() => import('./navbar/contact/Contact'));
const Blog = React.lazy(() => import('./navbar/blog/Blog'));

//? Products
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));

function Routes(props) {
    return (
        <BrowserRouter>
            <Suspense fallback = {<div>Loading...</div>}>
                <Switch>
{/* 
                    <Route exact path="/auth/Login" component = {Login}/>
                    <Route exact path="/auth/Logout" component = {Logout}/>
                    <Route exact path="/auth/Register" component = {Register}/> */}

                    <Route exact path="/">
                        <Layout>    
                            <Home props = {props} />
                        </Layout>
                    </Route>

                    <Route exact path="/about-us/">
                        <Layout>
                            <AboutUs/>
                        </Layout>
                    </Route>
                    <Route exact path="/about-us/1">
                        <Layout>
                            <AboutUs1/>
                        </Layout>
                    </Route>
                    <Route exact path="/about-us/2">
                        <Layout>
                            <AboutUs2/>
                        </Layout>
                    </Route>
                    <Route exact path="/about-us/3">
                        <Layout>
                            <AboutUs3/>
                        </Layout>
                    </Route>
                    <Route exact path="/about-us/4">
                        <Layout>
                            <AboutUs4/>
                        </Layout>
                    </Route>

                    <Route exact path="/blog">
                        <Layout>
                            <Blog/>
                        </Layout>
                    </Route>

                    <Route exact path="/contact">
                        <Layout>
                            <Contact/>
                        </Layout>
                    </Route>

                    <Route exact path="/sale">
                        <Layout>
                            <Sale/>
                        </Layout>
                    </Route>

                    <Route exact path="/products/:slug">
                        <Layout>
                            <ProductDetail/>
                        </Layout>
                    </Route>

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes

