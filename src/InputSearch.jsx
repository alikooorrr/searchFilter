import React from 'react'

function InputSearch({user, setUser}) {
  let searchName= (e) => {
    setUser(e.target.value)
  }
  return (
    <>
      <div className='input-form'>
        <input
          value={user}
          onChange={searchName}
          className='inputSearch'
          type="text"
          placeholder="Enter a name"
        />
        <button>Search</button>
      </div>
    </>
  )
}

export default InputSearch