import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductComponent } from './components/ProductComponent'


function App() {
  return (
    <div className="App">
   
    <ProductComponent/>
    </div>
  );
}

export default App;



export const prodData = [
  {
    prodName : "FancyProduct1",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct2",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct3",
    price :"40 -80"
  },
  {
    prodName : "FancyProduct4",
    price :"40 -80"
  },
]
