import React from 'react';
import './style.css';

const array = [
  { id: 1, name: 'Vasya', lasName: 'Test1' },
  { id: 2, name: 'Vova', lasName: 'Test2' },
  { id: 3, name: 'Petya', lasName: 'Test3' }
]

export const Table = () => {
  const users = array.map(user => {
    return <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.lasName}</td>
    </tr>
  })

  return (
    <table className='table'>
      <caption>Users</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>LastName</th>
        </tr>
      </thead>
      <tbody>
        {users}
      </tbody>
    </table>
  )
}
