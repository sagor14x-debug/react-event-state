import './UserCard.css';


export default function UserCard({user}) {
    return (
        <div className='user'>
          <h3>Name: {user.name} </h3> 
          <h3>Email: {user.email}</h3>
          <h3>City: {user.address.city}</h3>
          <h3>Zipcode: {user.address.zipcode}</h3>
          <h3><small>Phone: {user.phone}</small></h3>
         
        </div>
    )
}