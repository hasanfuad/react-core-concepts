import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App()
{
const randomPeople = ['Rahim','Karim','shakib','Rabbi']
const productName = [
            {name:'Photoshop', price:'$9.99'},
            {name:'Illustrator', price:'$7.99'},
            {name:'PDF BookReader', price: '$6.99'},
            {name:'PremierEl', price:'$249.99'},
            {name:'Adobe premier',price:'$299.99'}

]
//       const randomPeopleNames = randomPeople.map(name=>name)
//       console.log(randomPeopleNames)

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a react person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>{
         randomPeople.map (rP=><li>{rP}</li>)
        }
        {
          productName.map(product=> <li>{product.name}</li>)
        }
        {
        
        productName.map(pd=> <Product product={pd}></Product>)
          }
        </ul>




        <Person name={randomPeople[0]} age='24' hobby='Gossiping'></Person>
        <Person name={randomPeople[1]} age='25' hobby='Working'></Person>
        <Person name={randomPeople[2]} age='26' hobby='Playing'></Person>
        
        </header>
        </div>
  );
}

function Users(){
  const name = useState('')

  const [users, setUsers]= useState([])

  //UseEffect function we used for dataLoad.
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user  => <li>{user.email}</li>)
      }
      </ul>
    </div>
  )
}

function Counter(){
       const [count, setCount] = useState(0)
    
      const clickIncreased = () =>setCount( count+1)
      
       
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={ () => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){

  const productStyle={
        border:'1.5px solid salmon',
        margin: '10px',
        boxShadow: '5px 5px 15px gold',
        padding: '20px',
        height:'240px',
        width:'240px'
        //backgroundColor:'yellow'
  }
  const {name,price} = props.product
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>BuyNow->></button>

    </div>
  )
}



function Person(props){
  return (
    <div style={{border: '2px yellow solid',color:'orange',boxShadow:'5px 5px 10px gold',padding: '30px',margin:'10px',width:'500px'}}>
      <h2>
        Name: {props.name}
      </h2>
      <h3>
        Age: {props.age}

      </h3>
      <h4>
        Hobby:{props.hobby}
      </h4>
    </div>
  )
}


export default App;
