import React, { useRef } from 'react'
import styles from './SearchWindow.module.css'
import SearchForm from '../SearchForm/SearchForm'
import RegisterForm from '../RegisterForm/RegisterForm'

const SearchWindow = () => {
    let refNERW = useRef(); // NERW -> NewEmployeeRegisterWindow


    const openNewEmployeeRegisterWindow = () => {
        refNERW.current.style.display = 'grid';
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <SearchForm />
            </div>
            <button onClick={openNewEmployeeRegisterWindow} className={styles.button}>CRIAR</button>
            <div className={styles.NERW} ref={refNERW} >
                
            <RegisterForm />
                <button  onClick={() => {
                    refNERW.current.style.display = 'none'
                }} className={styles.button}>FECHAR</button>

            </div>
        </div>
    )
}

export default SearchWindow