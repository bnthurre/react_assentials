export default function TabButtons({label}){
    const handleClick =()=>{
        console.log("clicked the button");
    }
    return <li><button onClick={handleClick}>{label}</button></li>

}
// //using destructring by children prob
// export default function TabButtons({children}){
//     return <li><button>{children}</button></li>

// }
//using props
// export default function TabButtons(props){
//     return <li><button>{props.children}</button></li>

// }