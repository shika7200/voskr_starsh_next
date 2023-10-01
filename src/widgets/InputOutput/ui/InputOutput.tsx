import { Card } from "@/entities/Card";
import { InputForm } from "@/entities/inputForm";
import { Product } from "../types";


export default async function InputOutput() {
    let url = 'https://65193ac1818c4e98ac602a04.mockapi.io/products'
    let response = await fetch(url,{
        cache:'no-cache',
    })
    const products:Product[] = await response.json();
  return (
    <>
    <InputForm/>
    { products.map((product)=> (
        <div >
        <Card product='Компьютер' price='Персональный , доридоридори'/>
        </div>
    ))
    }
  </>
  )
}

