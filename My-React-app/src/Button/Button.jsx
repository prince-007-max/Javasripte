import styles from './Button.module.css'

function Button(){

    const handlecheck = (e) => e.target.textContant = "OUCH!"

    return(
        <button className={styles.button} onClick={(e) => handlecheck(e)} >Click here </button>
    );
}

export default Button