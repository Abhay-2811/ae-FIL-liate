import React from 'react'
import { Navbar } from './Navbar'
import axios from 'axios'

export const MinaProof = props => {
  const [progress, setProgress] = useState(0)
  // state 0 => nothing started yet
  // state 1 => owner completed changing unconfirmed proof and waiting for user to update state from his side

  if (progress === 0) {
    const handleClick = async () => {
      try {
        let headersList = {
          'Content-Type': 'application/json'
        }
        let bodyContent = JSON.stringify({
          key: process.env.REACT_APP_ADMIN_KEY,
          git: props.git,
          biz: props.biz
        })

        let reqOptions = {
          url: '127.0.0.1:6000/updateOnlyOwner/',
          method: 'POST',
          headers: headersList,
          data: bodyContent
        }

        let response = await axios.request(reqOptions)
        console.log(response.data)
        setProgress(1)
      } catch (error) {
        alert(error)
      }
    }
    return (
      <div>
        <button onClick={handleClick}>Begin Proof</button>
      </div>
    )
  } else if (progress === 1) {
    const [git, setGit] = useState(0)
    const [biz, setBiz] = useState(0)

    const handleClick = async () => {
      try {
        let headersList = {
          'Content-Type': 'application/json'
        }

        let bodyContent = JSON.stringify({
          git: git,
          biz: biz
        })

        let reqOptions = {
          url: '127.0.0.1:6000/userUpdateMainState/',
          method: 'POST',
          headers: headersList,
          data: bodyContent
        }

        let response = await axios.request(reqOptions)
        
        if(response.status === 200){
          // contract interaction 
        }
        else{
          // not verified 
        }
      } catch (error) {
        alert(error)
      }
    }
    return (
      <div>
        Admin Updated the stste Now it's your turn.
        <label htmlFor='git'>How old is your github account (In days)</label>
        <input
          type='number'
          id='git'
          onChange={e => {
            e.preventDefault()
            setGit(e.target.value)
          }}
        />
        <label htmlFor='biz'>
          How old is your business from registration as mentioned in document
          submitted (In months)
        </label>
        <input
          type='number'
          id='biz'
          onChange={e => {
            e.preventDefault()
            setBiz(e.target.value)
          }}
        />
        <p>
          Note State is already created using uploaded docs so be precise or the
          proof will fail....
        </p>
        <button onClick={handleClick}>Submit</button>
      </div>
    )
  }
}
