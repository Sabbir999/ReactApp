
import './App.css'
import'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems= ["Fish", "Chicken Breas","Beef", "Eggs", "Lentils","Greek Yogurt"];
 
  return(
    <>
    <h1 className='food-heading'>High Protein Food List</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    

    
        
    </>


    
    
  );
}

export default App
