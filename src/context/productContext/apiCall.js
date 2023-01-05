import config from '../../config';
import { axiosHandler, errorHandler } from '../../utils/utils';
import { getProductStart, getProductSuccess, getProductFailure, getProductsStart, getProductsSuccess, getProductsFailure } from './ProductActions';

// GET PRODUCTS
const getProducts = async (cat, dispatch) => {
    dispatch(getProductsStart());
    try {
        const res = await axiosHandler({
            method: 'get',
            url: cat ? `${config.proxy}/products?categories=${cat}` : `${config.proxy}/products`,
        }).catch((e) => console.log(errorHandler(e)));
        dispatch(getProductsSuccess(res.data));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};

// GET PRODUCT
const getProduct = async (id, dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axiosHandler({
            method: 'get',
            url: `${config.proxy}/products/find/` + id,
        }).catch((e) => console.log(errorHandler(e)));
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export { getProducts, getProduct };
