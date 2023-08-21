import React, { useEffect, useState } from 'react'
import './card-details.css'
import { Badge } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dlt, Add, Remove } from './redux/actions/Action';



const CardDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();

    const getData = useSelector((state) => state.cartReducer.carts)

    const compare = () => {
        let data = getData.filter((e) => {
            return e.id == id
        })
        setData(data)
    }
    //add qnty
    const dispatch = useDispatch()
    const send = (e) => {
        dispatch(Add(e))
    }

    const remove = (e) => {
        disptch(Remove(e))
    }

    // delet card
    const history = useNavigate();

    useEffect(() => {
        compare();
    }, [id])

    const disptch = useDispatch();
    const dlt = (id) => {
        disptch(Dlt(id))
        history('/')
    }

    return (
        <section id='card-details'>
            <div className="container">
                <h2 className='text-center'>item details</h2>
                {data.map((e) => {
                    return (
                        <div className="card" key={e.id}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <img className='img-fluid' src={e.imgdata} alt="" />
                                </div>
                                <div className="col-lg-7">

                                    <p><strong>dishes : </strong><span>{e.rname}</span></p>
                                    <p><strong>price : </strong><span>₹{e.price}</span></p>
                                    <p><strong>restaurant :</strong><span>{e.address}</span></p>
                                    <p><strong>total : </strong><span>  ₹ 350</span></p>
                                    <ul>
                                        <li><button onClick={() => remove(e)}>-</button></li>
                                        <li><span>{e.qnty}</span></li>
                                        <li><button onClick={() => send(e)}>+</button></li>
                                    </ul>

                                    <p><strong>rating : </strong><Badge bg="success">{e.rating}</Badge></p>
                                    <p><strong>order review : </strong><span>{e.somedata}</span></p>
                                    <p><strong>remove : </strong>
                                        <IconButton onClick={() => dlt(e.id)}>
                                            <DeleteIcon className='text-danger' />
                                        </IconButton></p>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default CardDetails
