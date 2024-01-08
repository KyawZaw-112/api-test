import React from "react";
import PokeInfo from "./PokeInfo";

const Drawer = () => {
	return (
		<div>
			<div className="drawer drawer-end">
				<input
					id="my-drawer-4"
					type="checkbox"
					className="drawer-toggle z-0"
				/>
				<div className="drawer-content hover:scale-110 transition active:scale-95">
					{/* Page content here */}
					<label
						htmlFor="my-drawer-4"
						className=" bg-teal-400 rounded-xl  h-5 w-5 text-sm tracking-tight px-3 py-2 text-slate-700 font-bold cursor-pointer"
					>
						Detail Stats
					</label>
				</div>
				<div className="drawer-side overflow-hidden z-50">
					<label
						htmlFor="my-drawer-4"
						aria-label="close sidebar"
						className="drawer-overlay "
					></label>
					<ul className="menu p-4 w-1/2 min-h-full bg-sky-300 text-base-content ">
						{/* Sidebar content here */}
                        <PokeInfo />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
