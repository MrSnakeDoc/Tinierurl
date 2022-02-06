module.exports = {
	components: {
		schemas: {
			Post: {
				type: "object",
				required: ["title"],
				properties: {
					id: {
						type: "integer",
						description: "The auto-generated id of the list",
						example: "4",
					},
					category_id: {
						type: "integer",
						description: "The id of the category associated.",
						example: "2",
					},
					slug: {
						type: "string",
						description: "The slug of the post",
						required: true,
						example: "angular-une-fausse-bonne-idee",
					},
					title: {
						type: "string",
						description: "The title of the post",
						required: true,
						example: "angular-une-fausse-bonne-idee",
					},
					excerpt: {
						type: "string",
						description: "The excerpt of the post",
						required: true,
						example: "angular-une-fausse-bonne-idee",
					},
					content: {
						type: "string",
						description: "The content of the post",
						required: true,
						example: "angular-une-fausse-bonne-idee",
					},
					createdAt: {
						type: "string",
						format: "date",
						description: "The date of the record creation",
						example: "2021-11-21 15:01:20.938+00",
					},
					updatedAt: {
						type: "string",
						format: "date",
						description: "The date of the record update",
						example: "2021-11-21 17:01:20.938+00",
					},
				},
				example: {
					id: 2,
					category_id: 2,
					slug: "angular-une-fausse-bonne-idee",
					title: "Angular, une fausse bonne idée ?",
					excerpt: "My angular article",
					content:
						"Angular, une fausse bonne idée ? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
					created_at: "2021-12-13T17:14:37.220Z",
					updated_at: null,
				},
			},
			Category: {
				type: "object",
				properties: {
					id: {
						type: "integer",
						description: "The auto-generated id of the card",
						example: 1,
					},
					route: {
						type: "string",
						description: "The title of your list.",
						required: true,
						example: "/react",
						required: true,
					},
					label: {
						type: "string",
						description: "Color of the card",
						required: true,
						example: "React",
						required: true,
					},
					createdAt: {
						type: "string",
						format: "date",
						description: "The date of the record creation",
					},
					updatedAt: {
						type: "string",
						format: "date",
						description: "The date of the record update",
					},
				},
				example: {
					id: "5",
					route: "/react",
					label: "React",
					createdAt: "2021-11-21 15:01:20.938+00",
					updatedAt: "2021-11-21 17:01:20.938+00",
				},
			},
		},
	},
};
