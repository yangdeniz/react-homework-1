import './App.css';
import ShopItemFunc from './components/shop-item-func/shop-item-func';
//import ShopItemClass from './components/shop-item-class/shop-item-class';
import ShopItem from './models/shop-item';

function App() {
  const item = new ShopItem();
  item.brand = 'Tiger of Sweden';
  item.title = 'Leonard coat';
  item.description = 'Minimalistic coat in cotton-blend';
  item.descriptionFull = 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.';
  item.price = 399;
  item.currency = '£'; 
  
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  )
}

export default App;
