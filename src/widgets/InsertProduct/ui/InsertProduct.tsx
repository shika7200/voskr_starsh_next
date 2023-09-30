import { Card } from '@/entities/Card';
import { InputForm } from '@/entities/inputForm';
import { Product } from '../types';


export default async function InsertProduct() {


  const res = await fetch('https://651835f2582f58d62d358105.mockapi.io/products',{
    cache: 'no-cache',
  })
 const products: Product[] = await res.json();

  return (
    <>
  <InputForm/>
  <div className='font-bold p-5 gap-5'>
  {products.map((product)=> (
    <div key={product.id} className="p-5 shadow">
    <Card product={product.product} price={product.price} />
    </div>
  ))}
  </div>
    </>

  )
}
