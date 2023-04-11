import React from 'react'

export const Warning = ({ userDelete, cancelDelete, deleteUser }) => {


  return (
    <div className='container__warning'>
      <div className="warning">
        <h3>
          Are you sure about leaving us whithoun you? :c<br />
          {userDelete?.name}
        </h3>
        <button onClick={ () => deleteUser(userDelete) }>Eliminar</button>
        <button onClick={ () => cancelDelete() }>Cancelar</button>
      </div> 
    </div>
  )
}
