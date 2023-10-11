import React from 'react'
import Insert from '../../comp/Insert'
import Link from 'next/link'
function page() {
    return (
        <>
            <h2>insert</h2>
                <Insert/>
            <Link href='/'>Home</Link>
            <Link href='./list'>List 보기</Link>
        </>
    )
}

export default page