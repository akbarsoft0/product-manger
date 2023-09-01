import React, { useState } from 'react'
import '../css/cards.css'
import { Card, Button } from 'react-bootstrap';
import Cardsdata from '../data/CardsData';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/actions/Action';


const Cards = () => {
    const [data, setData] = useState(Cardsdata);

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(Add(e))
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <h1 className='text-center'>Add to cart</h1>

                    {data.map((item, id) => {
                        return (
                            <div className="col-lg-4 col-md-6" key={id}>
                                <Card className='card'>
                                    <Card.Img variant="top" src={item.imgdata} style={{ height: '13rem' }} />
                                    <Card.Body>
                                        <Card.Title>{item.rname}</Card.Title>
                                        <Card.Text>
                                            price : ₹ {item.price}
                                        </Card.Text>
                                        <Button variant="primary"
                                            className='add-btn'
                                            onClick={() => send(item)}
                                        >add to cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>)
                    })}
                </div>
            </div>
        </section>

    )
}

export default Cards
