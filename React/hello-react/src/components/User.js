import React from 'react'

function User(props) {
  return (
    <div>
        <div>name: {props.name}</div>
        <div>age: {props.age}</div>
    </div>
  )
}

export default User
