export const QzzData = {
	JavaScript: {
		questions: [
			{
				question: "What is JavaScript primarily used for?",
				options: [
					"Data analysis",
					"Building user interfaces",
					"Adding interactivity to web pages",
					"Database management",
				],
				correctOption: 2,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "Which company developed JavaScript?",
				options: ["Microsoft", "Netscape", "Google", "Mozilla"],
				correctOption: 1,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "Which of the following is a JavaScript data type?",
				options: ["Number", "String", "Boolean", "All of the above"],
				correctOption: 3,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "Which keyword is used to declare a variable in JavaScript?",
				options: ["var", "let", "const", "All of the above"],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the result of `typeof null` in JavaScript?",
				options: ["object", "null", "undefined", "boolean"],
				correctOption: 0,
				points: 15,
				difficulty: "Hard",
			},
			{
				question:
					"Which of these is a correct way to create a function in JavaScript?",
				options: [
					"function myFunction() {}",
					"const myFunction = function() {}",
					"const myFunction = () => {}",
					"All of the above",
				],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What will `console.log(2 + '2')` output?",
				options: ["4", "'22'", "undefined", "NaN"],
				correctOption: 1,
				points: 15,
				difficulty: "Hard",
			},
			{
				question: "What does the `Array.prototype.map()` method do?",
				options: [
					"Modifies the original array",
					"Creates a new array with the results of calling a function on every element",
					"Filters the elements of the array",
					"Sorts the elements of the array",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the output of `console.log([] + [])`?",
				options: ["[]", "undefined", "'' (empty string)", "NaN"],
				correctOption: 2,
				points: 20,
				difficulty: "Hard",
			},
			{
				question: "What does the `===` operator do in JavaScript?",
				options: [
					"Checks both value and type equality",
					"Checks value equality only",
					"Assigns a value to a variable",
					"None of the above",
				],
				correctOption: 0,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "What is a promise in JavaScript?",
				options: [
					"A placeholder for a future value",
					"A callback function",
					"A method for handling errors",
					"A way to create a new array",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the purpose of `use strict` in JavaScript?",
				options: [
					"To enable strict type checking",
					"To enforce stricter parsing and error handling in your code",
					"To optimize performance",
					"To add new syntax to the language",
				],
				correctOption: 1,
				points: 15,
				difficulty: "Medium",
			},
			{
				question:
					"Which method is used to convert a JSON string into a JavaScript object?",
				options: [
					"JSON.stringify",
					"JSON.parse",
					"Object.create",
					"Object.parse",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the difference between `let` and `var`?",
				options: [
					"`let` is function-scoped, and `var` is block-scoped",
					"`let` is block-scoped, and `var` is function-scoped",
					"`let` is immutable, and `var` is mutable",
					"There is no difference",
				],
				correctOption: 1,
				points: 15,
				difficulty: "Hard",
			},
			{
				question: "What will `console.log(0.1 + 0.2 === 0.3)` output?",
				options: ["true", "false", "undefined", "NaN"],
				correctOption: 1,
				points: 20,
				difficulty: "Hard",
			},
			{
				question: "How can you check if a value is `NaN` in JavaScript?",
				options: [
					"isNaN(value)",
					"value === NaN",
					"typeof value === 'NaN'",
					"None of the above",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which of the following will return `true` for `Array.isArray([])`?",
				options: ["[]", "{}", "'[]'", "null"],
				correctOption: 0,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "What is the purpose of the `this` keyword in JavaScript?",
				options: [
					"To refer to the current function",
					"To refer to the current object",
					"To refer to the global scope",
					"To refer to the parent object",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What does `Array.prototype.filter()` do?",
				options: [
					"Creates a new array with all elements that pass the test implemented by the provided function",
					"Modifies the original array",
					"Adds elements to the end of the array",
					"Sorts the array in ascending order",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What will `console.log(typeof NaN)` output?",
				options: ["'number'", "'NaN'", "'undefined'", "'object'"],
				correctOption: 0,
				points: 15,
				difficulty: "Hard",
			},
			{
				question:
					"What is the purpose of the `event.preventDefault()` method in JavaScript?",
				options: [
					"To prevent the browser from executing the default action associated with the event",
					"To stop the propagation of the event to parent elements",
					"To cancel the current event",
					"None of the above",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which built-in JavaScript method can be used to merge two or more arrays?",
				options: ["concat()", "merge()", "combine()", "splice()"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What will be the output of `console.log([1, 2, 3] instanceof Array)`?",
				options: ["true", "false", "undefined", "Error"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What does the `new` keyword do in JavaScript?",
				options: [
					"It creates a new object from a constructor function",
					"It initializes a new variable",
					"It declares a new constant",
					"It adds a property to an object",
				],
				correctOption: 0,
				points: 15,
				difficulty: "Hard",
			},
			{
				question: "Which statement correctly explains hoisting in JavaScript?",
				options: [
					"All variable and function declarations are moved to the top of their scope before code execution",
					"Only `let` and `const` declarations are moved to the top of their scope",
					"Only function declarations are moved to the top of their scope",
					"Variables declared with `var` are not hoisted",
				],
				correctOption: 0,
				points: 20,
				difficulty: "Hard",
			},
		],
		styles: {
			color: "#1D1915",
			backgroundColor: "#F3EFE6",
		},
	},
	React: {
		questions: [
			{
				question: "What is React primarily used for?",
				options: [
					"Backend development",
					"Building user interfaces",
					"Database management",
					"Operating systems",
				],
				correctOption: 1,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "Which company developed React?",
				options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
				correctOption: 2,
				points: 5,
				difficulty: "Easy",
			},
			{
				question: "What is JSX in React?",
				options: [
					"A database language",
					"An extension for writing HTML in JavaScript",
					"A testing framework",
					"A state management tool",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Easy",
			},
			{
				question: "What is the purpose of the `useState` hook?",
				options: [
					"To fetch data from an API",
					"To manage component state",
					"To handle side effects",
					"To create a context",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the virtual DOM in React?",
				options: [
					"A copy of the real DOM used for fast updates",
					"A server-side database",
					"An actual DOM element",
					"A debugging tool",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which of the following is true about props in React?",
				options: [
					"Props are immutable",
					"Props are used to manage local component state",
					"Props are only used with class components",
					"Props can only contain numbers and strings",
				],
				correctOption: 0,
				points: 15,
				difficulty: "Medium",
			},
			{
				question:
					"How can you pass data from a parent component to a child component?",
				options: ["Using context", "Using state", "Using props", "Using refs"],
				correctOption: 2,
				points: 10,
				difficulty: "Easy",
			},
			{
				question: "What does the `useEffect` hook do?",
				options: [
					"Handles component rendering",
					"Manages global state",
					"Performs side effects like data fetching",
					"Handles errors",
				],
				correctOption: 2,
				points: 15,
				difficulty: "Medium",
			},
			{
				question: "What is the correct syntax for a functional component?",
				options: [
					"function MyComponent() { return <div>Hello</div>; }",
					"class MyComponent extends Component { render() { return <div>Hello</div>; } }",
					"const MyComponent = () => <div>Hello</div>;",
					"Both A and C",
				],
				correctOption: 3,
				points: 15,
				difficulty: "Medium",
			},
			{
				question:
					"What does React use to identify which items in a list have changed?",
				options: ["Keys", "Refs", "Indexes", "IDs"],
				correctOption: 0,
				points: 15,
				difficulty: "Medium",
			},
			{
				question: "Which hook is used to create a reference in React?",
				options: ["useEffect", "useRef", "useState", "useReducer"],
				correctOption: 1,
				points: 10,
				difficulty: "Easy",
			},
			{
				question: "How do you update the state in a functional component?",
				options: [
					"By directly modifying the state variable",
					"Using the setState function",
					"Using the state updater function returned by useState",
					"By re-rendering the component",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the purpose of React's Context API?",
				options: [
					"To manage side effects",
					"To fetch data from APIs",
					"To share state between components without passing props down manually",
					"To create functional components",
				],
				correctOption: 2,
				points: 20,
				difficulty: "Hard",
			},
			{
				question:
					"Which lifecycle method is equivalent to `useEffect` when used without dependencies?",
				options: [
					"componentDidMount",
					"componentDidUpdate",
					"componentWillUnmount",
					"All of the above",
				],
				correctOption: 3,
				points: 20,
				difficulty: "Hard",
			},
			{
				question: "What is the difference between React.memo and useMemo?",
				options: [
					"React.memo is for memoizing props, and useMemo is for memoizing values",
					"React.memo is for memoizing functions, and useMemo is for memoizing values",
					"React.memo is for class components, and useMemo is for functional components",
					"Both are the same",
				],
				correctOption: 0,
				points: 25,
				difficulty: "Hard",
			},
			{
				question: "What is the purpose of React's `StrictMode`?",
				options: [
					"To enforce stricter coding standards",
					"To identify potential issues in an application",
					"To optimize rendering performance",
					"To enhance security",
				],
				correctOption: 1,
				points: 15,
				difficulty: "Medium",
			},
			{
				question: "What is the purpose of the `useReducer` hook?",
				options: [
					"To fetch data from an API",
					"To handle state management with complex logic",
					"To create and manage refs",
					"To memoize values",
				],
				correctOption: 1,
				points: 20,
				difficulty: "Hard",
			},
			{
				question:
					"How can you prevent unnecessary re-renders in a functional component?",
				options: [
					"Using React.memo",
					"Using useCallback for functions",
					"Using useMemo for values",
					"All of the above",
				],
				correctOption: 3,
				points: 25,
				difficulty: "Hard",
			},
			{
				question: "What is the significance of the `key` prop in React?",
				options: [
					"Keys uniquely identify elements in an array to help React optimize rendering",
					"Keys are used to pass props to child components",
					"Keys are used for styling components",
					"Keys are used for error boundaries",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is React Fiber?",
				options: [
					"A database for React",
					"The new reconciliation engine for React that optimizes rendering",
					"A tool for debugging React applications",
					"A library for managing global state",
				],
				correctOption: 1,
				points: 25,
				difficulty: "Hard",
			},
		],
		styles: { color: "#151C1E", backgroundColor: "#E9FAFF" },
	},
	Genius: {
		questions: [],
		styles: { color: "#721817", backgroundColor: "#EFF2F1" },
	},

	English: {
		questions: [
			{
				question: "What is the main theme of Shakespeare's 'Macbeth'?",
				options: ["Ambition", "Love", "Revenge", "Fate"],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"Which literary device is primarily used in the phrase 'deafening silence'?",
				options: ["Oxymoron", "Metaphor", "Simile", "Alliteration"],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"In which poem does T.S. Eliot explore the theme of disillusionment in modern society?",
				options: [
					"The Waste Land",
					"The Love Song of J. Alfred Prufrock",
					"The Hollow Men",
					"Ash Wednesday",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"What is the primary function of a thesis statement in an essay?",
				options: [
					"To summarize the essay",
					"To present the main argument",
					"To provide background information",
					"To conclude the essay",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"Which author is known for the stream-of-consciousness narrative technique?",
				options: [
					"Virginia Woolf",
					"James Joyce",
					"William Faulkner",
					"All of the above",
				],
				correctOption: 3,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"'The Road Not Taken' by Robert Frost primarily explores which concept?",
				options: [
					"Choices and consequences",
					"Nature's beauty",
					"Isolation",
					"Friendship",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"'Pride and Prejudice' is a critique of which societal aspect?",
				options: [
					"Marriage customs",
					"Class structure",
					"Gender roles",
					"All of the above",
				],
				correctOption: 3,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"'The Great Gatsby' is often seen as a commentary on which American ideal?",
				options: [
					"The American Dream",
					"Individualism",
					"Materialism",
					"Socialism",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"What narrative perspective is used in 'To Kill a Mockingbird'?",
				options: [
					"First-person",
					"Second-person",
					"Third-person limited",
					"Third-person omniscient",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"Which of the following is NOT a characteristic of Romantic literature?",
				options: [
					"Emphasis on emotion",
					"Celebration of nature",
					"Focus on industrialization",
					"Interest in the individual",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "In literary terms, what does 'diction' refer to?",
				options: ["Word choice", "Sentence structure", "Tone", "Theme"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which novel features the characters Jay Gatsby and Daisy Buchanan?",
				options: [
					"The Catcher in the Rye",
					"The Great Gatsby",
					"Moby Dick",
					"1984",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is a common theme in Gothic literature?",
				options: [
					"Romantic love",
					"Nature's beauty",
					"Supernatural elements",
					"Social justice",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which poetic form consists of 14 lines with a specific rhyme scheme?",
				options: ["Haiku", "Sonnet", "Limerick", "Free verse"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Who wrote 'The Metamorphosis'?",
				options: [
					"Franz Kafka",
					"Herman Hesse",
					"Leo Tolstoy",
					"Gabriel Garcia Marquez",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What does 'imagery' refer to in literature?",
				options: [
					"Use of metaphors",
					"Descriptive language that appeals to the senses",
					"Character development",
					"Plot structure",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which famous novel begins with the line, 'Call me Ishmael.'?",
				options: [
					"Moby Dick",
					"The Old Man and the Sea",
					"Heart of Darkness",
					"War and Peace",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is a key characteristic of postmodern literature?",
				options: [
					"Linear narrative structure",
					"Emphasis on realism",
					"Intertextuality and metafiction",
					"Focus on character development",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "Which author is known for their use of magical realism?",
				options: [
					"Gabriel Garcia Marquez",
					"Ernest Hemingway",
					"F. Scott Fitzgerald",
					"Virginia Woolf",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"In which work does George Orwell explore totalitarianism through a dystopian lens?",
				options: [
					"Brave New World",
					"Fahrenheit 451",
					"1984",
					"The Handmaid's Tale",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "What is an allegory?",
				options: [
					"A type of poem",
					"A story with a hidden meaning or moral lesson",
					"A character who represents an idea",
					"A narrative technique",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Who wrote 'Beloved', a novel centered around the legacy of slavery?",
				options: [
					"Toni Morrison",
					"Alice Walker",
					"Zora Neale Hurston",
					"James Baldwin",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
		],

		styles: {
			backgroundColor: "#ABEDC6",
			color: "#403233",
		},
	},

	CubeSat: {
		questions: [
			{
				question: "What is the standard size of a CubeSat unit?",
				options: ["5x5x5 cm", "10x10x10 cm", "15x15x15 cm", "20x20x20 cm"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which university is credited with the development of the CubeSat standard?",
				options: [
					"Stanford University",
					"California Polytechnic State University",
					"MIT",
					"Harvard University",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "In what year was the first CubeSat launched?",
				options: ["2000", "2006", "2010", "2015"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the primary purpose of CubeSats?",
				options: [
					"Commercial communication",
					"Scientific research",
					"Entertainment",
					"Military surveillance",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"'GeneSat' was significant for being NASA's first CubeSat. What was its primary mission?",
				options: [
					"Studying gene expression in space",
					"Testing new propulsion systems",
					"Earth observation",
					"Communications testing",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"Which of the following is NOT a component typically found in a CubeSat?",
				options: [
					"Power system",
					"Communication device",
					"Large telescope",
					"Navigation system",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "What does the 'U' in CubeSat units represent?",
				options: ["Universal", "Unit", "Utility", "Unique"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which of these is a characteristic feature of CubeSats?",
				options: [
					"Large size",
					"High cost",
					"Standardized design",
					"Complex assembly",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What type of orbit do most CubeSats operate in?",
				options: [
					"Geostationary orbit",
					"Low Earth orbit",
					"Medium Earth orbit",
					"Polar orbit",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which propulsion method is commonly used in CubeSats for maneuvering?",
				options: [
					"Chemical propulsion",
					"Electric propulsion",
					"Solar sails",
					"None of the above",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "How many units can a CubeSat be expanded to in size?",
				options: ["3U", "6U", "12U", "All of the above"],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What type of data can CubeSats collect during their missions?",
				options: [
					"Earth observation data",
					"Space weather data",
					"Astronomical data",
					"All of the above",
				],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which organization is known for launching numerous CubeSats into space?",
				options: [
					"NASA",
					"ESA (European Space Agency)",
					"ISRO (Indian Space Research Organisation)",
					"All of the above",
				],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What is a common challenge faced by CubeSats during their missions?",
				options: [
					"Limited power supply",
					"High cost of materials",
					"Large size constraints",
					"Complex communication systems",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question:
					"Which type of satellite is smaller than a CubeSat but still used for space missions?",
				options: [
					"Nanosatellite",
					"Microsatellite",
					"Picosatellite",
					"Femtosatellite",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
		],

		styles: {
			backgroundColor: "#0F0F0F",
			color: "#EFE9ED",
		},
	},
	Digital_Fabrication: {
		questions: [
			{
				question: "What is 3D printing commonly referred to as?",
				options: [
					"Subtractive manufacturing",
					"Additive manufacturing",
					"Digital fabrication",
					"Traditional manufacturing",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which technology is often used in 3D printing?",
				options: [
					"CNC machining",
					"Laser cutting",
					"Fused Deposition Modeling (FDM)",
					"Injection molding",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What is the primary advantage of 3D printing over traditional manufacturing?",
				options: [
					"Lower material costs",
					"Faster production speed",
					"Ability to create complex geometries",
					"More durable products",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which software is commonly used to create digital models for 3D printing?",
				options: ["Adobe Photoshop", "AutoCAD", "Microsoft Word", "CorelDRAW"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "'SLA' in 3D printing stands for what?",
				options: [
					"Selective Laser Absorption",
					"Stereolithography Apparatus",
					"Solid Layer Assembly",
					"Sintered Layer Addition",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What is the term for the supportive structure used during the 3D printing process?",
				options: ["Scaffold", "Support material", "Infill", "Base layer"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"'FDM' is a popular method in 3D printing. What does it stand for?",
				options: [
					"Fused Deposition Modeling",
					"Fast Digital Manufacturing",
					"Filament Deposition Method",
					"Flexible Design Method",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What is the typical layer thickness range for most FDM printers?",
				options: ["0.1 to 0.5 mm", "0.01 to 0.1 mm", "1 to 5 mm", "5 to 10 mm"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which material is commonly used in FDM printing?",
				options: ["PLA", "Metal", "Ceramic", "Glass"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What does 'post-processing' refer to in the context of 3D printing?",
				options: [
					"Preparing the digital model",
					"Finishing the printed object",
					"Slicing the model",
					"Setting up the printer",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"Which industry has seen significant advancements due to 3D printing?",
				options: ["Healthcare", "Fashion", "Aerospace", "All of the above"],
				correctOption: 3,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is a common use of 3D printing in healthcare?",
				options: [
					"Creating jewelry",
					"Manufacturing cars",
					"Prototyping medical devices",
					"Building houses",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which of the following is a disadvantage of FDM printing?",
				options: [
					"High cost of materials",
					"Limited detail resolution",
					"Slow speed",
					"Complex setup",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question:
					"What type of material is typically used in Selective Laser Sintering (SLS)?",
				options: [
					"Liquid resin",
					"Plastic filament",
					"Powdered metal or plastic",
					"Solid blocks",
				],
				correctOption: 2,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "Which file format is most commonly used for 3D printing?",
				options: ["OBJ", "STL", "FBX", "DXF"],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What does the term 'infill' refer to in 3D printing?",
				options: [
					"The support material",
					"The internal structure of the object",
					"The first layer of the print",
					"The printer calibration process",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the purpose of a heated bed in 3D printing?",
				options: [
					"Speeding up the printing process",
					"Improving print adhesion",
					"Cooling the filament",
					"Enhancing print detail",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which of the following is a limitation of SLA printing?",
				options: [
					"Limited material options",
					"Poor surface finish",
					"Low accuracy",
					"High production speed",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "Which of these is an emerging application of 3D printing?",
				options: [
					"Food printing",
					"Automated welding",
					"Wood carving",
					"Laser cutting",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Advanced",
			},
			{
				question: "What is a common challenge in 3D printing large objects?",
				options: [
					"Material cost",
					"Warping",
					"Printer noise",
					"Post-processing time",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is 'multi-material printing'?",
				options: [
					"Printing with different layer thicknesses",
					"Printing with multiple colors or materials",
					"Printing with higher speeds",
					"Printing without supports",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which printer type uses a UV laser to cure liquid resin?",
				options: ["FDM printer", "SLS printer", "SLA printer", "DLP printer"],
				correctOption: 2,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the typical printing temperature for PLA material?",
				options: ["200-230°C", "150-180°C", "250-280°C", "300-350°C"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the main drawback of using ABS in 3D printing?",
				options: [
					"Brittleness",
					"Strong odor and warping",
					"Low heat resistance",
					"Limited color options",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "Which term refers to the 3D printer nozzle's movement?",
				options: ["Extrusion", "Axis travel", "Deposition", "Calibration"],
				correctOption: 1,
				points: 10,
				difficulty: "Easy",
			},
			{
				question: "What does the term 'bridging' mean in 3D printing?",
				options: [
					"Printing layers on a heated bed",
					"Printing a flat section between two supports",
					"Connecting multiple printers",
					"Smoothing a printed surface",
				],
				correctOption: 1,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the purpose of a slicer in 3D printing?",
				options: [
					"Converting a 3D model into printer commands",
					"Cleaning the printer nozzle",
					"Polishing the final print",
					"Selecting materials for printing",
				],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
			{
				question: "What is the standard nozzle diameter for most FDM printers?",
				options: ["0.4 mm", "0.6 mm", "1.0 mm", "2.0 mm"],
				correctOption: 0,
				points: 10,
				difficulty: "Medium",
			},
		],
		styles: {
			backgroundColor: "#0E273C",
			color: "#E8D7F1",
		},
	},
};
