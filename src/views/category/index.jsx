import './category.css';
import CategoryCard from './CategoryCard';
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { getProducts } from '../../context/productContext/apiCall';
import { getCategorys } from '../../context/categoryContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';
import { CategoryContext } from '../../context/categoryContext/CategoryContext';

const Category = ({ cat }) => {
    const location = useLocation();
    const id = location.pathname.split('/')[2]
    const { products, dispatch } = useContext(ProductContext);
    const { categorys, dispatch: catdispatch } = useContext(CategoryContext);
    const categoryProducts = products?.filter((pro) => pro.categories.find((cat) => cat === id));
    const catTitle = categorys.find((cat) => cat._id === id);

    // Get Products & Categorys
    useEffect(() => {
        getProducts(cat, dispatch);
        getCategorys(catdispatch);
    }, [cat, dispatch, catdispatch]);

    return (
        <>
            <section className='shop'>
                <div className="container d-flex">
                    <div className="content-width">
                        <div className="heading d-flex">
                            <div className="heading-left f-flex row">
                                <h2>{catTitle?.title} Category</h2>
                            </div>
                        </div>
                        <div className="product-content grid-2">
                            <CategoryCard categoryProducts={categoryProducts} />
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
};

export default Category;
