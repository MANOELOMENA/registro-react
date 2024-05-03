import Input from '../Input/Input'

function Form() {
  return (
    <div>
      <Input nome="Nome" />
      <Input nome="Email" />
      <Input nome="Senha" tipo="password"/>
      <Input nome="Confirmar Senha" tipo="password" />
      <Input nome="Telefone" />
      <Input nome="CEP" tipo="tel"/>
      <Input nome="Bairro"  />
      <Input nome="Estado" />
      <Input nome="Número" />
      <button>Enviar</button>
    </div>
  )
}

export default Form