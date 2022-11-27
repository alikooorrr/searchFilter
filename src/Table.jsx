import React from 'react'

let Table = ({ users }) => {
    return (
        <>
            <div className='tables'>
                <table className='table-data'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>

    )
}
export default Table