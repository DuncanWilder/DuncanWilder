async function saveRecipeToDb(rawRecipe) {
  validateRecipe(rawRecipe);

  const reformattedRecipe = reformatRecipe(rawRecipe);

  await saveToDatabase(reformattedRecipe);

  return { success: true };
}
