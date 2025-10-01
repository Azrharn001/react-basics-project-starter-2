import {
  Box,
  Image,
  Text,
  Stack,
  Badge,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

export default function RecipePage({ recipe, onBack }) {
  return (
    <Box>
      <Button mb={4} onClick={onBack}>
        Back
      </Button>
      <Image src={recipe.image} alt={recipe.label} borderRadius="md" />
      <Stack mt={4} spacing={2}>
        <Text fontSize="2xl" fontWeight="bold">
          {recipe.label}
        </Text>
        <Text>Meal: {recipe.mealType?.join(', ')}</Text>
        <Text>Dish: {recipe.dishType?.join(', ')}</Text>
        <Text>Total cooking time: {recipe.totalTime} min</Text>
        {recipe.dietLabels?.map(label => (
          <Badge key={label} colorScheme="green">
            {label}
          </Badge>
        ))}
        <Stack direction="row" wrap="wrap">
          {recipe.healthLabels.map(label => (
            <Badge key={label} colorScheme="purple">
              {label}
            </Badge>
          ))}
        </Stack>
        {recipe.cautions?.map(caution => (
          <Badge key={caution} colorScheme="red">
            {caution}
          </Badge>
        ))}
        <Text fontWeight="bold" mt={2}>
          Ingredients:
        </Text>
        <ul>
          {recipe.ingredientLines.map(ing => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <Text>Servings: {recipe.yield}</Text>
        <Text fontWeight="bold" mt={2}>
          Nutrients:
        </Text>
        <SimpleGrid columns={[1, 2]} spacing={2}>
          <Text>Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL?.quantity)} kcal</Text>
          <Text>Protein: {Math.round(recipe.totalNutrients.PROCNT?.quantity)} g</Text>
          <Text>Fat: {Math.round(recipe.totalNutrients.FAT?.quantity)} g</Text>
          <Text>Carbs: {Math.round(recipe.totalNutrients.CHOCDF?.quantity)} g</Text>
          <Text>Cholesterol: {Math.round(recipe.totalNutrients.CHOLE?.quantity)} mg</Text>
          <Text>Sodium: {Math.round(recipe.totalNutrients.NA?.quantity)} mg</Text>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}