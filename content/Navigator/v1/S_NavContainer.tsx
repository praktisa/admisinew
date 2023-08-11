import React from 'react'
import NC from './NavContainer.module.css'


interface children {
  children: React.ReactNode

}

export default function S_NavContainer({ children }: children) {
  return (
    <>
      <div className={NC['layout']}>

        <span className={NC['layout__logo']}>
          <h1>Admisi</h1>
        </span>

        <span className={NC['layout__menu']}>
          {children}
        </span >

        <span className={NC['layout__footer']}>
          {/* <ButtonLogout /> */}
          Logout
        </span>

      </div>
    </>
  )
}
