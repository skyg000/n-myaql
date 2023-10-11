import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Upload from './comp/Upload'
export default function Home() {
  const test = process.env.NODE_HOST
  
  return (
    <>
    {test}
      <h1> Maria DB CRUD </h1>
      <Link href='./pages/insert'> 글 작성 </Link>
      <Link href='./pages/list'> 리스트 </Link>
      <hr/>
        <Upload/>
    </>
  )
} 
