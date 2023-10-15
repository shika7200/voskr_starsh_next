import { Product } from '@/widgets/InsertProduct/types'
import styles from './InputForm.module.scss'
import { addProductToDataBase } from '../actions/addProductToDataBase'


export default  async function InputForm() {
 
const response = await fetch ('https://65193ac1818c4e98ac602a04.mockapi.io/products',{
cache:"no-cache",
next:{
  tags:["products"],

}
})
const products:Product[] =await response.json()
    return (

<form 
action={addProductToDataBase}
className='flex flex-col gap-5 max-w-xl mx-auto p-5'>
  <div className="mb-6">
    <label  className={styles.label}>Название единицы</label>
    <input name="product" type="text" id="product" className={styles.input}  required />
  </div>
  <div className="mb-6">
    <label  className={styles.label}>Описание</label>
    <input name="price" type="text" id="price" className={styles.input} required />
  </div>
  
  <button type="submit" className={styles.button}>otpravit</button>
</form>

    )
}
