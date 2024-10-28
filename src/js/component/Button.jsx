// import React, {useState} from "react";


// export const Boton() {
//   const [contador, setContador] = useState(0);

//   const handleClick = () => {
//     setContador(contador === 0);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Incrementar</button>
//     </div>
//   );
// }

// export const Boton = () => {
//     const [detener, setDetener] = useState("");

//     const contador = (play) => {
//         setShowNum(contador)
//     }
//     setTimeout(() => { clearInterval(); alert('stop'); }, 5000);

//     return (

//         <div className="trafficTop container">
//           <div className="palito"></div>
//              <div className="caja d-flex flex-column align-items-center bg-dark w-25">
//                <button onClick={()=> setTimeout ("0")} 
//                 className={`red light bg-danger ${color === "red"?"selected" : ""}`}></button>


{/* // function ContadorConBoton() { */}
{/* //     const [contador, setContador] = useState(0);
//     const [enMarcha, setEnMarcha] = useState(false);
  
//     useEffect(() => { */}
{/* //       let intervalo;
//       if (enMarcha) {
//         intervalo = setInterval(() => {
//           setContador(contador + 1);
//         }, 1000); // Incrementa el contador cada segundo
//       }
//       return () => clearInterval(intervalo);
//     }, [enMarcha]);
  
//     const manejarClic = () => {
//       setEnMarcha(!enMarcha);
//     };
  
//     return (
//       <div>
//         <p>Contador: {contador}</p>
//         <button onClick={manejarClic}>{enMarcha ? 'Detener' : 'Iniciar'}</button>
//       </div>
//     );
//   }
  
//   export default ContadorConBoton; */}