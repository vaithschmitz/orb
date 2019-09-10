import React, {useEffect, useState} from 'react';
import Post from './components/Post'
import './App.css';

function App() {
  
  const [posts, setPosts] = useState([])
  const [myId, setMyId] = useState()
  const [myPosts, setMyPosts] = useState([])
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    async function fetchPosts(){
      try{
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await res.json()
        setPosts(...posts, data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchPosts()
  }, [])
  

  function allPosts(){
    let buffer = []
    posts.map(el => buffer.push(<Post title={el.title} content={el.body} reference={el.id}/>))
    return buffer
  }

  function getMyPosts(e){
    e.preventDefault()
    setMyId(e.target.querySelector('input').value)
    let buffer = []
    let mine = posts.filter(el => el.userId == myId)
    mine.map(el => buffer.push(<Post title={el.title} content={el.body} reference={el.id}/>))
    setMyPosts([...myPosts, buffer])
  }



  return (
    <div id="App">

      <div id='App-top'>Posts Page
        <form onSubmit={e => getMyPosts(e)} > 
          <label id='App-formLabel'>My ID:
            <input id='App-formInput'  type='text' placeholder='Please select between 1 and 10'></input>
          </label>
        </form>

      </div>

      <div className='App-header-left'>All Posts</div>

      <div id='App-left'>
        {allPosts()}
      </div>

      <div className='App-header-right'>My Posts</div>

      <div id='App-right'>
        {myPosts}
      </div>
      
    </div>
  );
}

export default App;
