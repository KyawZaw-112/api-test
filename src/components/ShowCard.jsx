import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "./Loading";

const ShowCard = () => {
	const [pokeData, setPokeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();

	const pokeFun = async () => {
		setLoading(true);
		const fetchPokeData = await axios.get(url);
		setNextUrl(fetchPokeData.data.next);
		setPrevUrl(fetchPokeData.data.previous);
		getPokemon(fetchPokeData.data.results);
		setLoading(false);
	};

	const getPokemon = async(fetchDatas) => {
		fetchDatas.map(async(poke) => {
			const fetch = await axios.get(poke.url);
			console.log(poke.url);
			setPokeData((state) => {
				state = [...state, fetch.data];
				state.sort((a, b) => (a.id > b.id ? 1 : -1));
				return state;
			});
		});
	};

	useEffect(() => {
		pokeFun();
	}, [url]);

	return (
		<>
			{loading ? (
				<div className="w-screen h-screen flex justify-center items-center">
					<Loading />
				</div>
			) : (
				<div>
					<div className="flex flex-wrap justify-center gap-4 py-3">
						<Card pokemon={pokeData} loading={loading} />
					</div>
					<div className=" flex gap-9 my-3 justify-center">
						<button className="bg-sky-400 px-4 py-1 rounded-md text-lg font-bold text-slate-700 hover:transform hover:scale-110 transition active:scale-90">
							Previous
						</button>
						<button className="bg-sky-400 px-4 py-1 rounded-md text-lg font-bold text-slate-700 hover:transform hover:scale-110 transition active:scale-90">
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ShowCard;
