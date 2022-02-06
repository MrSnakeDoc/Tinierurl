module.exports = {
	paths: {
		//? POSTS
		"/posts": {
			get: {
				tags: ["Posts CRUD operations"],
				description: "Retrieve a list of all posts with category associated",
				summary: "Return a list of all posts",
				parameters: [],
				responses: {
					200: {
						description: "Posts were obtained",
						content: {
							"application/json": {
								schema: {
									type: "array",
									items: {
										$ref: "#/components/schemas/Post",
									},
								},
							},
						},
					},
				},
			},
			post: {
				tags: ["Posts CRUD operations"],
				description: "Return the created post",
				summary: "Return the post newly created",
				requestBody: {
					content: {
						"application/json": {
							schema: {
								type: "object",
								$ref: "#/components/schemas/Post",
								required: ["slug", "title", "excerpt", "content"],
							},
						},
					},
				},
				responses: {
					200: {
						description: "Post was created",
						content: {
							"application/json": {
								schema: {
									items: {
										$ref: "#/components/schemas/Post",
									},
								},
							},
						},
					},
					400: {
						description: "Title Cannot be empty",
					},
				},
			},
		},
		"/posts/{id}": {
			get: {
				tags: ["Posts CRUD operations"],
				description: "Return a post by id",
				summary: "Return the post by id",
				parameters: [
					{
						in: "path",
						name: "id",
						schema: {
							type: "integer",
							example: 3,
						},
						required: true,
						description: "id",
					},
				],
				responses: {
					200: {
						description: "Post with id was found",
						content: {
							"application/json": {
								schema: {
									items: {
										$ref: "#/components/schemas/Post",
									},
								},
							},
						},
					},
					404: {
						description: "The post could not be found",
					},
				},
			},
		},
		"/posts/category/{id}": {
			get: {
				tags: ["Posts CRUD operations"],
				description: "get all posts from a category with the category id",
				summary: "return all posts from a category",
				parameters: [
					{
						in: "path",
						name: "id",
						schema: {
							type: "integer",
							example: 3,
						},
						required: true,
						description: "id",
					},
				],
				responses: {
					200: {
						description: "Posts were retrieved",
						content: {
							"application/json": {
								schema: {
									type: "array",
									items: {
										$ref: "#/components/schemas/Post",
									},
								},
							},
						},
					},
					404: {
						description: "The list could not be found",
					},
				},
			},
		},
		//? POSTS
		//
		//
		//? CATEGORY
		"/categories": {
			get: {
				tags: ["Categories CRUD operations"],
				description:
					"Retrieve a list of all categories with all posts associated",
				summary: "Returns a list of all categories",
				responses: {
					200: {
						description: "categories were obtained",
						content: {
							"application/json": {
								schema: {
									type: "array",
									items: {
										$ref: "#/components/schemas/Category",
									},
								},
							},
						},
					},
				},
			},
		},
		//? CATEGORY
	},
};
