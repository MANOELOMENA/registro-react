import Form from '../Form/Form'

function App() {
  return (
    <div className="App">
      <h1>Cadastro Mídia</h1>
      <Form/>
    </div>
  )
  function HandleSubmit(event) {
    event.preventDefault()
    
    fetch(`https://ranekapi.origamid.dev/json/api/usuario`),{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(form)
  }
  }
}

export default App
