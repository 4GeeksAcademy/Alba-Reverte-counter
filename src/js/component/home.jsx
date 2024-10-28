import React, { useEffect, useState } from "react";
import { SecondsCounter } from "../../Counter";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [seconds, setSeconds] = useState (0);
	useEffect ( () => {
		// window.onload = () => {}
			const id = setInterval(() => {
				
				setSeconds ((seconds) => seconds+1)
				
				
			}, 1000);
			
		return () => {
			clearInterval(id)
		}

		
	},[])


	return (
		<div className="container-fluid" id= "box">
			<h1 className="text-center">Cronómetro</h1>
				<div className="boxcounter">
					<SecondsCounter counter = {seconds}/>
				</div>

				{/* <Boton /> */}
				
				
				<div class="d-grid gap-2 col-6 mx-auto">
  					<button class="btn btn-light m-2" type="button">Pause</button>
 				    <button class="btn btn-light m-2" type="button">Reset</button>
				</div>
			
			
		
		</div>
	);

	// document
    // .querySelector("#btn-card")
    // .addEventListener("click", () => generateRandomCard());
};



export default Home;
