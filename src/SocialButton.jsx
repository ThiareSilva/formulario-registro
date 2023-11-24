import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialButton = ({nombreIcono}) => {
  return (
    <div className='borde-iconos'>
    <FontAwesomeIcon icon={nombreIcono} size="2xl" />
    </div>
  )
}

export default SocialButton