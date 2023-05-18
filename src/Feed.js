import React,{useEffect, useState} from 'react'
import './Feed.css'
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import InputOption from './InputOption';
import Post from './Post';
import { db } from "./fb"
import firebase from 'firebase/compat/app';
function Feed() {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('');
  useEffect(() => {
    db?.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
    )));
    })
  }, [])
  const sendPost = e => { 
    e.preventDefault();
    db.collection('posts').add({
      name: 'Sam Khan',
      description: 'this is a sample description',
      message: input,
      photoUrl: '',
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
      <div className='feed__input'>
      <Create/>
      <form>
            <input type='text' value={input} onChange={(e) => {
              setInput(e.target.value);
            }} />
            <button onClick={sendPost} type='submit'>send</button>
      </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={Image} title='Photo' color='#70B5F9' />
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDay} title='Write article' color='#7FC15E'/>
        </div>
      </div>
      {/*Posts */}
      {
        posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return  <Post name={name} description={description} message={message} key={id}/>
        })
      }
    </div>
  )
}

export default Feed
