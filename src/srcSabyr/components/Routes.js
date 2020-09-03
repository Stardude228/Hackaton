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
const Login = React.lazy(() => import('../pages/LoginPages/Login'));
const Register = React.lazy(() => import('../pages/LoginPages/Register'));

//? Products
// const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));

function Routes() {
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
                            <Home/>
                        </Layout>
                    </Route>

                    <Route exact path="/about-us">
                        <Layout>
                            <AboutUs/>
                        </Layout>
                    </Route>
                    <Route exact path="/login">
                        <Layout>
                            <Login/>
                        </Layout>
                    </Route>
                    <Route exact path="/register">
                        <Layout>
                            <Register/>
                        </Layout>
                    </Route>

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes

