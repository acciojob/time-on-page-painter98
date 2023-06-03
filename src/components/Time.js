import React,{ useState,useEffect } from "react"

export function Time(){
    let [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
    })

    return (
        <>
            <p>You've been on this page for {count} seconds.</p>
        </>
    )
} 