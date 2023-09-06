import React, { useState, useEffect } from 'react'
import { Container, TextField } from '@mui/material'

function User () {
  const [data, setdata] = useState({
    name: '',
    age: 0,
    date: '',
    programming: ''
  })

  useEffect(() => {
    fetch('/data').then(res =>
      res.json().then(data => {
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming
        })
      })
    )
  }, [])

  return (
    <div>
      <Container fixed>
        <TextField
          id='outlined-basic'
          variant='filled'
          fullWidth='25'
          label='Search'
        />
      </Container>
      <div style={{ textAlign: 'center', height: '100%' }}>
        {/* <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p>
        <div style={{ background: "red" }}>content</div> */}
        <Container fixed>
          <img
            style={{ width: 600, height: 400 }}
            src={'http://localhost:5000/image'}
            alt=''
          />
        </Container>
      </div>

      <Container>
        <div className='container'>
          <div className='item0'>item0</div>
          <div className='item1'>
            <div className='item2'>item2</div>
            <div className='item3'>
              <div className='item4'>
                <div className='box1'></div>
                <div className='box2'></div>
              </div>
              <div className='item5'>item5</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default User
