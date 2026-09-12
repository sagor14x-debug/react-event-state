
import { Suspense } from 'react'
import './App.css'
// import Cart from './Cart'
// import Counter from './Counter'
// import Batter from './Batter'
import Users from './Users'
// import Posts from './Post';
// import Post from './Post'
// import Comments from './Comments';

// const commentsDataPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/commentsv");
//   const data = await res.json();
// }


const usersDataPromise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;

}
// const postDataPromise = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return data;

// }

function App() {
  // function handleClick() {
  //   alert ('button clicked')
  // }

  // const handleClick = () => {
  //   alert('Click me 3')
  // }

  // const handleAddToCard = (id) => {
  //   alert('buying item' + id)
  // }

  return (
    <>
    
    <Suspense fallback = {<p>Loading...</p>}>
        <Users usersDataPromise = {usersDataPromise()}></Users>
    </Suspense>
{/* 
    <Suspense fallback = {<p>Loading Post Data...</p>}>
        <Posts postsDataPromise = {postDataPromise()} ></Posts>
    </Suspense>

    <Suspense fallback = {<p>How are you???...</p>}>
      <Comments commentsDataPromise = {commentsDataPromise()} ></Comments>
    </Suspense> */}

    {/* <Counter></Counter>
    <Batter></Batter> */}
    {/* <Cart></Cart> */}
     {/* <button onclick = 'handleClick'>Click me</button> */}
     {/* <button onClick={handleClick}>Click me 2</button>
     <button onClick={handleClick}>Click me 3</button>

     <button onClick={() => alert('Click Me 4')}>Click Me 4</button>

     <button onClick={() => handleAddToCard(65)}>Buy Now</button> */}

    </>
  )
}

export default App
