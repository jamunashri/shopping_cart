import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../assets/style.css'

const Home = () => {
    const [data, setData] = useState([])
    const history = useNavigate()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            let { data } = res
            console.log(data)
            setData(data)
        })
    }, [])
    const showDetails = (id) => {
        history(`show/id=${id}`)
    }
    return (
        <div className="row" >
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        {data.map((product, j) => {
                            let { title, image, price, id } = product
                            return (
                                <div className="product-thumbnail" key={j}>
                                    <div className="product-img-head">
                                        <div className="product-img">
                                            <img src={image} alt="" className="img-fluid" width="180px" height="150px" /></div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-content-head">
                                            <h3 className="product-title">{title}</h3>

                                            <div className="product-rating d-inline-block">
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                                <i className="fa fa-fw fa-star"></i>
                                            </div>
                                            <div className="product-price"> Rs.{price}</div>
                                        </div>
                                        <div className="product-btn">
                                            <button className="btn btn-primary">Add to Cart</button>
                                            &nbsp; &nbsp;
                                            <button className="btn btn-secondary" onClick={() => showDetails(id)}>Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home