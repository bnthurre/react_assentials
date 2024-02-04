export default function TabButtons({label, onselect , isSelected}){
  
    return <li><button className={isSelected ? 'active' : undefined} onClick={onselect}>{label}</button></li>

}
// //using destructring by children prob
// export default function TabButtons({children}){
//     return <li><button>{children}</button></li>

// }
//using props
// export default function TabButtons(props){
//     return <li><button>{props.children}</button></li>

// }