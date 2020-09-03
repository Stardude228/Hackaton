import React, { useState,} from 'react'
import { Modal, Row, Col, Card, CardBody, Label, Input, ButtonGroup, Button}  from 'reactstrap'
import { Link } from 'react-router-dom'
import Home from '../Home'

function Login(props) {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    console.log(props)
    return (
        <div>
            <Link to="/">NAZAD</Link>
            <Home/>
            <Modal isOpen={modalIsOpen}>            
                <Row style={{height:'0vh',width:'100%'}} className="align-items-center justify-content-center">
                  <Col md={8}>
                    <Card className="shadow">
                      <CardBody>
                        <form>
                          <h3>Login</h3>
                          <Label className="mt-3" htmlFor="email">
                            Enter your email:
                          </Label>

                          <Input 
                            id="email"
                            name="email"

                          />
                          <Label className="mt-3" htmlFor="password">
                            Enter your password:
                          </Label>
                          <Input 
                            id="password"
                            name="password"

                          />
                          <ButtonGroup className="w-100 mt-3">
                            <Button color='primary' type="submit">Submit</Button>
                            <Button type="reset" onClick={()=>setModalIsOpen(false)}>Cancel</Button>
                          </ButtonGroup>
                          <p className="text-center mt-3">Ты че не зарегался? {' '} <Link to="/register">Зарегайся</Link></p>
                          <p className="text-center mt-3"><Link to="/">Домой</Link></p>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default Login
