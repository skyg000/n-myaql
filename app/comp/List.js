'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function List() {
    const [data, setData] = useState([]);
    const getData=()=>{
        axios.get('/api')
            .then(res => {
                setData(res.data)
            })
    }
    const del=(num)=>{
        axios.delete(`/api/${num}`)
            .then(res => {
                setData(res.data)
            })
    }
    const edit=(num)=>{
        axios.put(`/api/${num}`,{name:'홍홍홍'})
            .then(res => {
                setData(res.data)
            })
    }
    useEffect(() => {
        getData();
    },[])
    return (
        <>
            <ul>
                {
                    data.map(obj => (
                        <li key={obj.num}>
                            아이디:{obj.id} /
                            이름:{obj.name} /
                            이메일:{obj.email} 
                            <button onClick={()=>{del(obj.num)}}> 삭제 </button>
                            <button onClick={()=>{edit(obj.num)}}> 수정 </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default List