import './App.css'
import Product from "./components/product/Product";

export default function App() {
    return (
        <div className='products'>
          <Product title={'milc'} price={'20uah'}/>
          <Product title={'juice'} price={'120uah'}/>
        </div>
    );
}