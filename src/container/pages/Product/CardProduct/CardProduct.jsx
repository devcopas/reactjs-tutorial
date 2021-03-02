import React, { Component } from "react";

import Counter from "./Counter";

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <img
                    src="https://ecs7.tokopedia.net/img/cache/900/attachment/2021/2/1/65580410/65580410_1d2bdace-2ad8-4de6-99b6-afc360a3c87d.jpg"
                    alt=""
                    width="100%"
                />
                <p className="product-title">
                    Daging Ayam Berbumbu Rasa Original
                </p>
                <p className="product-price">Rp 410,000</p>
                <Counter />
            </div>
        );
    }
}

export default CardProduct;
