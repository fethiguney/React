
import React from 'react'

const Jsx6 = () => {
    const users = [
		{ id: 1, firstName: "John", lastName: "Doe" },
		{ id: 2, firstName: "Susan", lastName: "Doe" },
		{ id: 3, firstName: "Alice", lastName: "Doe" },
		{ id: 4, firstName: "Michael", lastName: "Doe" },
		{ id: 5, firstName: "Josheph", lastName: "Doe" },
	];

   
  return (
    <ul>
        {users.map((item)=> (
        <li key={item.id}>
            {item.firstName} {item.lastName}
        </li>
    ))}
    </ul>
  )
}

export default Jsx6;