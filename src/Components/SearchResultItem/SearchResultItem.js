import React, { useRef } from 'react'
import styles from './SearchResultItem.module.css'

const SearchResultItem = (props) => {

    let refItem = useRef();


    const onClick = async () => {
        let url = 'https://allugator.herokuapp.com/delete/' + props.searchResult.CPF;
        let data = await fetch(url);
        let json = await data.json();
        refItem.current.style.display = 'block';
        console.log(json);
    }

    return (
        <div className={styles.container} >
            <p>Nome</p>
            <p>{props.searchResult.name}</p>
            <p>CPF</p>
            <p>{props.searchResult.CPF}</p>
            <p>Cargo</p>
            <p>{props.searchResult.role}</p>
            <p>Data de ingresso</p>
            <p>{props.searchResult.date}</p>
            <p>Estado de nascimento</p>
            <p>{props.searchResult.state}</p>
            <p>Salário</p>
            <p>{props.searchResult.salary}</p>
            <p>Status</p>
            <p>{props.searchResult.status}</p>
            <button onClick={onClick} className={styles.button}>remover</button>
            <p className={styles.removido} ref={refItem}>Funcionario removido.</p>
        </div>
    )
}

export default SearchResultItem