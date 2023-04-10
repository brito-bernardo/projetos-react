import React from 'react'
import IncludeIcon from '../assets/include-icon.jpeg'
import '../styles/Include.css'


function Include() {
  return (
    <div className='container-include'>
    <img src={IncludeIcon} alt='ícone' className='icon' />
    <h1 className='title'>Include Engenharia</h1>
    <p className='text'>A Include Engenharia é uma Empresa Júnior localizada no Centro de Tecnologia da Universidade Federal do Rio Grande do Norte, que proporciona aos estudantes dos cursos de Ciências e Tecnologia, Engenharia da Computação, Engenharia Mecatrônica e Engenharia de Telecomunicações, uma oportunidade valiosa de vivenciar o mundo empresarial. Através da oferta de serviços como desenvolvimento de aplicativos para dispositivos móveis, otimização de redes wifi e automação residencial, os alunos têm a chance de aplicar seus conhecimentos teóricos em projetos práticos e ganhar experiência profissional.</p>
    </div>  
  )
}

export default Include