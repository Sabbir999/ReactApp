import styles from "./Item.module.css"
const Item = ({foodItem}) => {

    return (
        <>
        
            <li className={styles['Kg-item']}> {foodItem} </li>
            
           
        </>
    )
}
export default Item;