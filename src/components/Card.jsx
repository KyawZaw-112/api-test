import React from "react";
import Drawer from "./Drawer";
import Loading from "./Loading";

const Card = ({ pokemon, loading }) => {
	// console.log(pokemon);
	return (
		<>
			{pokemon?.map((poke, index) => (
				<div
					key={index}
					className="select-none border w-60 h-24 md:w-56 md:h-64 md:p-3 rounded-lg shadow-lg"
				>
					<div className="flex md:flex-col items-center">
						<img
							src={poke.sprites.front_default}
							alt=""
							className="md:h-36 h-24"
						/>
						<div className="flex flex-col gap-3 md:items-center">
							<p className="md:text-2xl text-lg font-bold text-slate-700 md:mb-4 capitalize">
								{poke.name}
							</p>
							<Drawer />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Card;
