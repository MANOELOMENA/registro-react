import { useState } from 'react'

function Input({ nome, tipo }) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

return (
  <div>
    <label>{nome}: </label>
    {tipo === 'password' ? (
      <input
        type="password"
        value={value}
        onChange={handleChange}
      />
    ) : tipo === 'number' ? (
      <input
        type="number"
        value={value}
        onChange={handleChange}
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    )}
    <p>{value}</p>
  </div>
  )
}

export default Input

