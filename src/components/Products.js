import React from 'react';
import { useGlobalContext } from '../context/Context';
import products from '../data/Data';

function Products() {

    const {addItemToCart} = useGlobalContext();

    return (
        <div className='products'>
            <div className='product-center'>{
                products.map(product => {
                    const {id, title, cate, price, image} = product;
                    return (
                        <article key={id} className='product'>
                            <header>
                                <img className='img-fluid' 
                                    src={image} alt={title} />
                                <div >
                                    <button className='btn' style={{border:"none",backgroundColor:"lightGrey",borderRadius:"100px",padding:"10px"}}
                                    onClick={_ => addItemToCart(product)}>
                                    Add to Cart
                                    </button>
                                </div>
                            </header>
                            <footer>
                                <div className='product-info'>
                                    <h4 className='product-title'>{title}</h4>
                                    <h4 className='product-cate'>{cate}</h4>
                                </div>
                                <h4 className='product-price'>₹{price}</h4>
                            </footer>
                        </article>
                    )
                })
            }</div>
        </div>
    );
}

export default Products;