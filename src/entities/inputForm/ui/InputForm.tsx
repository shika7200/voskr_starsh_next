import styles from './InputForm.module.scss'

export default function InputForm() {
    return (

<form>
  <div className="mb-6">
    <label  className={styles.label}>Название единицы</label>
    <input type="email" id="email" className={styles.input}  required />
  </div>
  <div className="mb-6">
    <label  className={styles.label}>Описание</label>
    <input type="password" id="password" className={styles.input} required />
  </div>
  
  <button type="submit" className={styles.button}>Submit</button>
</form>

    )
}
