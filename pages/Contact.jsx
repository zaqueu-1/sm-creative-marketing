import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'


function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if(name===''| email===''| message===''){
      toast.error("Preencha todos os campos!")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_ehowqo3', 'template_g9mudkn', templateParams, 'uhRRS9jfcCyU9HjfG')
    .then((res) => {
      toast.success('Mensagem enviada!')
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('Erro: ', err)
    })

  }

  return (
    <div className='contact-container'>
      <h1 data-aos={"fade-up"} data-aos-duration={"1200"} className='contact-title'>ENTRE EM CONTATO</h1>
      <p data-aos={"fade-left"} data-aos-duration={"1500"} className='contact-sub'>Mande uma mensagem para nós!</p>

      <form data-aos={"fade-right"} data-aos-duration={"1800"} className='contact-form' onSubmit={sendEmail}>
        <input
          className='input'
          type='text'
          placeholder='Digite seu nome'
          onChange={(e) => setName(e.target.value)}
          value={name} 
        />

      <input
          className='input'
          type='text'
          placeholder='Digite seu email'
          onChange={(e) => setEmail(e.target.value)}
          value={email} 
        />

      <textarea
          className='textarea'
          placeholder='Digite sua mensagem...'
          onChange={(e) => setMessage(e.target.value)}
          value={message} 
        />

        <input className='submit-btn' type='submit' value='Enviar' />

      </form>
      
    </div>
  )
}

export default Contact
