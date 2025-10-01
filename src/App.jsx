import { useState } from "react";
import { Box } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage"; 
import RecipePage from "./pages/RecipePage";
import { data } from "./utils/data.js"; 

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box p={4}>
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeListPage
          recipes={data.hits}
          onSelect={(recipe) => setSelectedRecipe(recipe)}
        />
      )}
    </Box>
  );
}
