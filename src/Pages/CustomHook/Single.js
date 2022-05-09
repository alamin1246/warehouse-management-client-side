import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://cryptic-cliffs-97574.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            });
    }, [])
    return [product, setProduct];
}
