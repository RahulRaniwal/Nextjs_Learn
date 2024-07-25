import React from 'react'

interface Users {
  id: number,
  name: string,
  username: string,
  email: string
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users[] = await res.json();
  return (
    <div className='p-20'>
      <h1 className='text-3xl text-green-500'>Users</h1>

      <ul>
        {users.map(user =>
          <li className='text-xl text-yellow-600' key={user.id} >{user.name}</li>
        )}
      </ul>
    </div>
  )
}

export default UsersPage
