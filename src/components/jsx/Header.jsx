import React, { useEffect, useState } from 'react'
import "../css/header.css"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { IconButton, Badge, Menu } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dlt } from '../redux/actions/Action';


const Header = () => {
    const getData = useSelector((state) => state.cartReducer.carts)
    // console.log(getData)

    const [price, setPrice] = useState(0)
    // console.log(price)

    const disptch = useDispatch();
    const dlt = (id) => {
        disptch(Dlt(id))
    }

    const total = () => {
        let price = 0;
        getData.map((ele) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price);
    }

    useEffect(() => {
        total();
    }, [total])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <header>
                <Navbar bg="dark" data-bs-theme="dark">
                    <img src='/assets/logo.png' alt="" style={{ height: '60px' }} />
                    <Container>
                        <NavLink to="/" className='text-light' >Products Cart</NavLink>
                        <Nav className="me-auto">
                            <NavLink to="/" >Home</NavLink>
                        </Nav>
                        <IconButton aria-label="cart" className='text-light font-5' onClick={handleClick} >
                            <Badge badgeContent={getData.length} color="primary"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Container>
                    <Menu className=''
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            getData.length ? <div className='cart-card'>
                                <strong>photo</strong>
                                <strong>returent</strong>
                                <IconButton onClick={handleClose} className='x-btn'>
                                    <CloseIcon />
                                </IconButton>
                                <hr />


                                {getData.map((e) => {
                                    return (
                                        <>
                                            <div key={e.id} className="cart-items">
                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                    <img src={e.imgdata} alt="" width={60} height={60} />
                                                </NavLink>
                                                <ul>
                                                    <li>{e.rname}</li>
                                                    <li>Price: ₹ {e.price}</li>
                                                    <li>Quantity: {e.qnty}</li>
                                                </ul>
                                                <IconButton className='del' onClick={() => dlt(e.id)}>
                                                    <DeleteIcon className='text-danger' />
                                                </IconButton>
                                                <hr />
                                            </div >
                                        </>
                                    )
                                })}
                                <p>Total: ₹ {price}</p>
                            </div> : <div className='cart-box'>
                                <p>your cart is empty</p>
                                <img src='../../assets/cart.gif' alt="" width={50} />
                                <IconButton onClick={handleClose} className='x-btn'>
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        }


                    </Menu>
                </Navbar >
            </header >
        </>)
}

export default Header
