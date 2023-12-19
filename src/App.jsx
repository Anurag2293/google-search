import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";


import SearchState from "./context/search/SearchState";
import './App.css';
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "search",
		element: <SearchResult />
	}
]);

const App = () => {
	return (
		<SearchState>
			<RouterProvider router={router} />
		</SearchState>
	)
}

export default App;

/*
<Autocomplete options={[
	"Papaya",
	"Persimmon",
	"Paw Paw",
	"Prickly Pear",
	"Peach",
	"Pomegranate",
	"Pineapple"
	]} 
/>
*/