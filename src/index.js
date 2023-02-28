import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Example = (props)=>{
  const [count,setCount] = useState(0)
  const [followers,setFollowers]=useState([])
  const increment = ()=>{
    setCount((prevCount)=>{
      return prevCount + 1
    })}
    useEffect(()=>{
      const fetchData = ()=>{
        fetch(`https://api.github.com/users/otarza/followers`)
        .then(response =>response.json())
        .then(result=>{
          setFollowers(result)
        })
      }
      fetchData()
      document.addEventListener('mousedown',increment)
      return ()=>{
        document.removeEventListener('mousedown',increment) 
      } 
    },[])
  return (
    <>
    <div className='countDiv'>
      <h1>{props.title}</h1>
      <p>You clicked Desktop {count} times</p>
    </div>
    <span className='span'></span>
      <h2 className='h2'>Test-Using Fetch api for Github followers</h2>
    <div className='followersDiv'>
      {followers.map((follower,index)=>{
        return(<li key={index}>
          <h4>{follower.login}</h4>
          <img src={follower.avatar_url} />
        </li>)
      })}
    </div>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Example title='example for react useState'/>);