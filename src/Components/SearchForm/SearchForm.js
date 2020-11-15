import React, { useRef, useContext } from 'react'
import styles from './SearchForm.module.css'
import { Context } from '../../Context'

const SearchForm = () => {
    let { searchResult, setSearchResult } = useContext(Context);
    const refSelect = useRef();
    const refInput = useRef();

    const search = async (e) => {
        e.preventDefault();
        const selected = refSelect.current.value;
        const url = 'https://allugator.herokuapp.com/' + selected + '/' + refInput.current.value;
        const data = await fetch(url);
        const answer = await data.json();
        setSearchResult(answer);

    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input ref={refInput} className={styles.input}></input>
                <select name="cars" id="cars" ref={refSelect} className={styles.select}>
                    <option value="name">Nome</option>
                    <option value="salary">Salario</option>
                    <option value="CPF">CPF</option>
                    <option value="state">Estado</option>
                    <option value="role">Cargo</option>
                    <option value="date">Data de ingresso</option>
                    <option value="status">Status</option>
                </select>
                <button onClick={(e) => search(e)} className={styles.button}>BUSCAR</button>
            </form>
        </div>
    )
}

export default SearchForm