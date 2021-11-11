import axios from "axios";
import React, { useEffect } from "react";

const Details = () => {
    useEffect(() => {
        axios.post(`https://fakestoreapi.com/products/`)
    })
return (
    <div>hi</div>
)
}
export default Details