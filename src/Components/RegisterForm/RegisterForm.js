import React, { useRef } from 'react'
import styles from './RegisterForm.module.css'
import { postData } from '../../Common/CommonFunctions'

const RegisterForm = () => {

    let refName = useRef();
    let refSalary = useRef();
    let refRole = useRef();
    let refState = useRef();
    let refDate = useRef();
    let refCPF = useRef();
    let refStatus = useRef();

    let refMessage = useRef();


    const onClick = async (e) => {
        e.preventDefault();
        let send = true;
        if (refName.current.value === '') {
            refName.current.style.border = 'solid red 1px';
            refName.current.style.borderRadius = '3px';
            send = false;
        }
        if (refSalary.current.value === '') {
            refSalary.current.style.border = 'solid red 1px';
            refSalary.current.style.borderRadius = '3px';
            send = false;
        }
        if (refRole.current.value === '') {
            refRole.current.style.border = 'solid red 1px';
            refRole.current.style.borderRadius = '3px';
            send = false;
        }
        if (refState.current.value === '') {
            refState.current.style.border = 'solid red 1px';
            refState.current.style.borderRadius = '3px';
            send = false;
        }
        if (refDate.current.value === '') {
            refDate.current.style.border = 'solid red 1px';
            refDate.current.style.borderRadius = '3px';
            send = false;
        }
        if (refCPF.current.value === '') {
            refCPF.current.style.border = 'solid red 1px';
            refCPF.current.style.borderRadius = '3px';
            send = false;
        }
        if (refStatus.current.value === '') {
            refStatus.current.style.border = 'solid red 1px';
            refStatus.current.style.borderRadius = '3px';
            send = false;
        }

        if (send) {
            let url = 'https://allugator.herokuapp.com/register';
            let data = {
                name: refName.current.value,
                salary: refSalary.current.value,
                role: refRole.current.value,
                state: refState.current.value,
                date: refDate.current.value,
                CPF: refCPF.current.value,
                status: refStatus.current.value
            }
            let sentMessage = await postData(url, data);
            console.log(sentMessage);
            refMessage.current.style.display = 'rgba(0,0,0,0)';
        } else {
            refMessage.current.style.color = 'red';
        }
    }

return (
    <div className={styles.container}>


        <form className={styles.form}>
            <p>Nome</p>
            <input ref={refName} className={styles.input}></input>
            <p>Cargo</p>
            <input ref={refRole} className={styles.input}></input>
            <p>CPF</p>
            <input ref={refCPF} className={styles.input}></input>
            <p>Estado</p>
            <input ref={refState} className={styles.input}></input>
            <p>Data de ingresso</p>
            <input ref={refDate} className={styles.input}></input>
            <p>Salario (R$)</p>
            <input ref={refSalary} className={styles.input}></input>
            <p>Status</p>
            <input ref={refStatus} className={styles.input}></input>



            <button onClick={e => onClick(e)} className={styles.button}>CRIAR</button>
        </form>
        <p ref={refMessage} className={styles.message}>Preencha todos os campos</p>
    </div>
)
}

export default RegisterForm