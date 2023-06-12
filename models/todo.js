import mongoose from "mongoose";

// create a schema

const TodoSchema = mongoose.Schema(
	{
		title: {
			type: "string",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Todo", TodoSchema);
