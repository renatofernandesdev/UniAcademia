import React from "react"

function Main(props) {
  return (

<center>
    <div class="row">
      <h1>PÁGINA INDISPONÍVEL!</h1>
      <h1>Seja bem vindo ao nosso site</h1>
      <h2>Siga-nos nas redes sociais:</h2>
      <p>Instagram: {props.instagram}</p>
      <p>Whatsapp: {props.whatsapp}</p>
      <p>E-mail: {props.email}</p>
    </div>
</center>

  );
}

export default Main;