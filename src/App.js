
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import { addUser , deleteBook , updateStatus , updateSubscriber} from './features/Users';
import { useState } from 'react';

function App() {
  
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.users.value);

  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [publisher , setPublisher] = useState("");
  const [description , setDescription] = useState("");
  const [status , setStatus] = useState("");

  const [newStatus , setNewStatus] = useState("");

  const [issued_To , setIssuedTo] = useState("");

  const [newIssuedTo , setNewIssuedTo] = useState("");


  return (
    <>
      <center>
      <div className='addBook'>
         <h1>Add Books into the Library Store</h1>
         <input type="text" placeholder="Book Name" onChange={(event)=>{setTitle(event.target.value)}}/><br/>
         <input type="text" placeholder="Author" onChange={(event)=>{setAuthor(event.target.value)}}/><br/>
         <input type="text" placeholder="Publisher"  onChange={(event)=>{setPublisher(event.target.value)}}/><br/>
         <input type="text" placeholder="Description"  onChange={(event)=>{setDescription(event.target.value)}}/><br/>
         
         
         <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id+1 , title: title , author: author , publisher: publisher ,  description: description }))}}>Add Book</button>
      </div>
      </center>

      <div className='displayUsers'>
        {
          userList.map((user)=>{
            return (
            <center>
             <div>
              
              <h1>{user.title}</h1>
              <h6>{user.author}</h6>
              <h6>{user.publisher}</h6>
              <p><b>Description : </b>{user.description}</p>
              <h3>{user.status}</h3>
              <h3>Issued To : {user.issued_To}</h3>

              <input type="text" placeholder="Change Status" onChange={(event)=>{setStatus(event.target.value)}} />

              <button onClick={()=>{dispatch(updateStatus({id: user.id , status : newStatus }))}}>Update Status</button> <br/>

              <input type="text" placeholder="Change Subscriber name" onChange={(event)=>{setNewIssuedTo(event.target.value)}} />

              <button onClick={()=>{dispatch(updateSubscriber({id: user.id, issued_To: newIssuedTo}))}}>Update Subscriber</button> <br/>

              <button onClick={() => {
                  dispatch(deleteBook({ id: user.id }));
                }}>Remove Book</button>
             </div>
             </center>

            ) 
          })
        }
      </div>
    </>
  );
}

export default App;
