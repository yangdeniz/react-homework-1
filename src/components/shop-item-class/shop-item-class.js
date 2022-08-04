import '../shared/shop-item-component/shop-item.css';
import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from "../../models/shop-item";

class ShopItemClass extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.props = {
    item: PropTypes.instanceOf(ShopItem).isRequired
}

export default ShopItemClass;