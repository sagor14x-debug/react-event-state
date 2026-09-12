import { use } from "react";
import UserCard from "./UserCard";

export default Users;

function Users({usersDataPromise}) {

    const users = use(usersDataPromise);
    console.log(users);


    return (
        <div>
            <h2>Users:{users.length} </h2>
            {
                users.map(user => <UserCard user={user}></UserCard>)
            }
            
        </div>
    )
}


// 1. Suspense fallback
// 2. Create a promise function to load data
// 3. Send the promise to the component to load data 


















// /*
// *1. Data source | JSON
// *JSOn stringify()
// * JSON parse()
// * 
// * 
// *.JSON 
// * 
// * 
// * 
// // * / 

// // callback
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then(data =>{ console.log(data)})


// // async await
// async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }

// // for arrow function:

// const loadData2 = async () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     return data;
// }