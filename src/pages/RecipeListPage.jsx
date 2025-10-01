import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Badge,
  Input,
  SimpleGrid,
  Card,
  CardBody,
} from "@chakra-ui/react";

export default function RecipeListPage({ recipes = [], onSelect }) {
  const [search, setSearch] = useState("");

  const filtered = recipes.filter(({ recipe }) => {
    const nameMatch = recipe.label
      .toLowerCase()
      .includes(search.toLowerCase());
    const healthMatch =
      recipe.healthLabels?.some((label) =>
        label.toLowerCase().includes(search.toLowerCase())
      ) ?? false;
    return nameMatch || healthMatch;
  });

  return (
    <Box>
      <Input
        placeholder="Search by name or health label..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filtered.map(({ recipe }) => (
          <Card
            key={recipe.label}
            cursor="pointer"
            _hover={{ boxShadow: "lg" }}
            onClick={() => onSelect(recipe)} 
          >
            <Image src={recipe.image} alt={recipe.label} borderRadius="md" />
            <CardBody>
              <Stack spacing={2}>
                <Text fontWeight="bold" fontSize="lg">
                  {recipe.label}
                </Text>

                {recipe.dietLabels.length > 0 && (
                  <Badge colorScheme="green">{recipe.dietLabels.join(", ")}</Badge>
                )}

                {recipe.cautions.length > 0 && (
                  <Badge colorScheme="red">{recipe.cautions.join(", ")}</Badge>
                )}

                <Text fontSize="sm">
                  <b>Meal:</b> {recipe.mealType?.join(", ")}
                </Text>
                <Text fontSize="sm">
                  <b>Dish:</b> {recipe.dishType?.join(", ")}
                </Text>

                <Stack direction="row" wrap="wrap">
                  {recipe.healthLabels.includes("Vegan") && (
                    <Badge colorScheme="purple">Vegan</Badge>
                  )}
                  {recipe.healthLabels.includes("Vegetarian") && (
                    <Badge colorScheme="blue">Vegetarian</Badge>
                  )}
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}