import React from "react";
import { Navbar } from "../components/Navbar";
import { MainContent } from "../content/MainContent";
import { CatalogueContent } from "../content/CatalogueContent";
import { ServicesContent } from "../content/ServicesContent";
import { ContactContent } from "../content/ConcactContent";
import { ProductCard } from "../components/ProductCard";

export const App = () => {
	return (
		<>
			<Navbar />
			<MainContent />
			<CatalogueContent />
			<ServicesContent />
			<ContactContent />
		</>
	);
};

export default App;
