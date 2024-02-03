
export default
 // //using props to access data dynamically
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.img} alt="" />
//       <h3>{props.title}</h3>
//       <p>{props.decription}</p>
//     </li>
//   );
// }
///using object desrtrucring instead of props
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}