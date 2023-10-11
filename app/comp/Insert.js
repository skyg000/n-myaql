"use client"
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
function insert() {
    const navi = useRouter()
    const insertFn = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData)
        axios.post('/api',values)
        navi.push('./list')
    }
    return (
        <div>
            <form onSubmit={insertFn}>
                <p><input type='text' name='id'/></p>
                <p><input type='text' name='name'/></p>
                <p><input type='email' name='email'/></p>
                <p><input type='submit' value='저장'/></p>
            </form>
        </div>
    )
}

export default insert