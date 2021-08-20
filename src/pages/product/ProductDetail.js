import React from 'react';
import { useParams } from 'react-router-dom';

import ProductDetailContainer from '@/containers/ProductDetailContainer';

const ProductDetail = (props) => {
    const { id } = useParams();

    return (
        <>
            <ProductDetailContainer id={id} />
        </>
    );
};

export default ProductDetail;
