"use client"
import {AiFillDelete} from "react-icons/ai";
function todo() {
  return (
		<>
			<div className="container mx-auto w-6/12 bg-slate-300 text-center p-3 mt-44">
				<form action="">
					<input
						placeholder="Add task ... "
						type="text"
						className="border-none bg-white rounded focus:outline-none p-1"
					/>
					<button className="bg-neutral-800 text-white p-1 ml-6 rounded">
						Add Task
					</button>
				</form>
				<div className="card">
					<ul>
						<li>
							task list
							<button className="bg-slate-500 text-white">
								<AiFillDelete />
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default todo