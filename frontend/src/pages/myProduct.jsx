import React, { useEffect, useState } from "react";
import MyProduct from "../components/MyProduct";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import axios from "../axiosConfig";


export default function MyProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userEmail = useSelector((state)=>state.user.email);


    useEffect(() => {
        axios.get(`/api/v2/product/my-products?email=${userEmail}`)
            .then((res) => {
                console.log()
                setProducts(res.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error(" Error fetching products:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [userEmail]);


    if (loading) {
        return <div className="text-center text-white mt-10">Loading products...</div>;
    }


    if (error) {
        return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
    }


    return (
        <>
        <NavBar />
        <div className="w-full min-h-screen bg-neutral-800">
            <h1 className="text-3xl text-center text-white py-6">My products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                {products.map((product) => (
                    <MyProduct key={product._id} {...product} />
                ))}
            </div>
        </div>
        </>
    );
}
