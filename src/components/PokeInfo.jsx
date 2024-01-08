import React from "react";
const PokeInfo = () => {
	return (
		<div className=" flex justify-between">
            <div className="md:mt-20 md:ml-10 md:pl-3">
                <h1 className="font-bolder md:text-2xl text-lg text-slate-700">Name</h1>
                <p className="text-3xl font-bold text-slate-700 mt-2">Charmander</p>
				<div className="mt-5">
					<h1 className="text-2xl text-slate-700">Abilities</h1>
					<ul>
						<li className=" mt-2 text-slate-700">Blaze</li>
						<li className="text-slate-700">Solar-power</li>
					</ul>
				</div>
				<div className="mt-5">
					<h1 className="text-2xl text-slate-700">Stats</h1>
					<div className="flex items-center mt-2">
						<p className="text-slate-700 mr-1">Hp : </p>
						<p className="text-slate-700">39</p>
					</div>
					<div className="flex items-center mt-2">
						<p className="text-slate-700 mr-1">Attack : </p>
						<p className="text-slate-700">52</p>
					</div>
					<div className="flex items-center mt-2">
						<p className="text-slate-700 mr-1">Defense : </p>
						<p className="text-slate-700">43</p>
					</div>
					<div className="flex items-center mt-2">
						<p className="text-slate-700 mr-1">Special Attack : </p>
						<p className="text-slate-700">50</p>
					</div>
				</div>
				<div className="mt-5">
					<h1 className="text-2xl text-slate-700">Weight</h1>
					<p className="mt-2">85 pound</p>
				</div>
            </div>
			<img src="charmander.png" alt="poke-char" className="md:h-96 h-20 animate-bounce" />
		</div>
	);
};

export default PokeInfo;
