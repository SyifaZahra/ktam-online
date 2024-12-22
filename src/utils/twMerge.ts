import { extendTailwindMerge } from "tailwind-merge";

const options = {
	classGroups: {
		display: [
			"block",
			"inline-block",
			"inline",
			"flex",
			"inline-flex",
			"grid",
			"inline-grid",
			"table",
			"hidden",
			"contents",
		],
	},
	conflictingClassGroups: {
		display: ["display"], // Classes in the `display` group conflict with each other
	},
}

export default extendTailwindMerge(options as any);
