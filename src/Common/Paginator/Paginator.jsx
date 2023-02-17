import styles from "./Paginator.module.css";
import {useState} from "react";

export const Paginator=({totalItemsCountNow,pageSize,count,clickEvent,portionSize=10})=>{
    const pages = []
    const pageCount = Math.ceil(totalItemsCountNow /pageSize)
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount=Math.ceil(totalItemsCountNow/portionSize)
    let[portionNumber, setPortionNumber]=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
    let rightPortionPageNumber=portionNumber*portionSize;
    return <div className={styles.paginator}>
        {portionNumber>1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PERV</button>}
        {pages
            .filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
            return <span key={p} className={ count === p ? styles.activePage : styles.unActivePage}
                         onClick={(e) => {
                             clickEvent(p)
                         }}
            > {p} </span>
        })}
        {portionCount>portionNumber &&  <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}