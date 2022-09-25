import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, handleRemovePd}) => {
    const {name ,img,  price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className="details">
                    <p title={name}>
                    {
                        name.length > 20 ? name.slice(0,20)+'...' : name
                    }
                    </p>
                    <p><small> Price : ${price} </small></p>
                    <p><small> Shipping : ${shipping} </small></p>
                    <p><small> Quantity : {quantity} </small></p>
                </div>
                <div onClick={()=>handleRemovePd(product)} className="delete-icon">
                        <FontAwesomeIcon  className='dlt-icon' icon={faTrashAlt} />
                </div>
            </div>
        </div>
    );
};
export default ReviewItem;