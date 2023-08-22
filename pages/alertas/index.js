import React from 'react'
// importar clsx 
import { clsx } from 'clsx'

// importar estilos  alert
import styles from '../../styles/alert.module.css'

const Alerts = ({ children, type }) => {
    return (
        <div className={
            clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })
        }>
            {children}

        </div>
    )
}

export default Alerts