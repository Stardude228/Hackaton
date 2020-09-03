import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import WheelSvg from '../assets/icons/wheel.svg'
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/actions'

function ProductDetail(props) {
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.slug === item.slug)
    }

    useEffect(() => {
        setLoading(true);
        Axios.get(process.env.REACT_APP_API_URL + params.slug)
            .then(({ data }) => {
                setLoading(false);
                setData(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [params.slug])

    if (loading) return (<h1>Loading...</h1>)

    return (
        <div>
            ProductDetail of {params?.slug}
            {data ?(
                <div>
                    <Row>
                        <Col md={6}>
                            <img className='w-100' alt={data.title} src={data.image} />
                        </Col>
                        <Col md={6}>
                            <h1>{data.title}</h1>
                            <p>{data.comment}</p>
                            <ButtonGroup>
                                <Button onClick={() => props.addItemToCart(data)} color='primary'>{data.price} $</Button>
                                {isInCart(data, props.cartItems) ? (
                                    <Button
                                        color="danger"
                                        onClick={() => props.removeItemFromCart(data.slug)}
                                    >
                                        Remove from cart
                                    </Button>
                                ) : (
                                        <Button
                                            className="d-flex align-items-center"
                                            onClick={() => props.addItemToCart(data)}
                                            color="success"
                                        >
                                            Add To Cart 
                                            <img className="ml-1" width="20" height="20" alt="cart" src={WheelSvg}/>
                                        </Button>
                                    )}

                            </ButtonGroup>
                        </Col>
                    </Row>
                </div>) :

                (<div>
                    <h4 className="text-danger">Error 404: Product {params.slug} is not defined</h4>
                </div>)
            }
        </div>
    )
}

const mapStateToProps = state => state.CartReducer

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(ProductDetail)


    // const [params] = useParams()
    // const getItemById = (id)=>{
    //     const index = items.findIndex((item)=>item.id===id);
    //     return items[index];
    // }