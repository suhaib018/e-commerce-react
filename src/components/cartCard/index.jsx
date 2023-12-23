import React from "react";
import "./style.css";
import mobile from "../../../public/assets/mobile.png";

const CartCard = () => {
  return (
    <div className="cart-container">
      <div className="cart-image">
        <img src={mobile} width="100%" height="100%" />
      </div>

      <div className="product-details">
        <div className="product-details-header">
          <p>الإلكترونيات</p>
          <button>
            إزالة <img src={mobile} height="15px" width="15px" />
          </button>
        </div>
        <div className="product-details-info">
          آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس 4.5
        </div>
        <div className="trade-mark">الماركة:آبل</div>

        <div className="product-price-and-quantity">
          <input type="number"/>
          <p>333 دينار</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
