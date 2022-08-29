import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_KEY } from "../../api";
import { useEffect, useState } from "react";
import ParkCard from "./ParkCard";
import Container from "react-bootstrap/Container";

export default function FeaturedParksCards() {
	const [featuredParks, setFeaturedParks] = useState([]);

	useEffect(() => {
		let parkData = [];
		(async () => {
			try {
				const response = await fetch(
					`https://developer.nps.gov/api/v1/parks?parkCode=acad,yell,dena&api_key=${API_KEY}`
				);
				parkData = (await response.json()).data;
			} catch (error) {
				console.log("error", error);
				parkData = [];
			}

			setFeaturedParks(parkData);
		})();
	}, []);

	return (
		<Container className="fluid  p-3">
			<h1> Featured Parks</h1>
			{featuredParks.map((park, index) => {
				return <ParkCard parkData={park} key={index} />;
			})}
			{/* */}
		</Container>
	);
}
