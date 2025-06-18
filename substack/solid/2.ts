async function saveRecipeToDb(rawRecipe) {
  if (!rawRecipe.title || !rawRecipe.ingredients) {
    throw new Error('Missing data')
  }

  const reformattedRecipe = {
    ...rawRecipe,
    quantity: parseInt(quantity),
    date_created: new Date(),
  }

  await database.query(
    "INSERT INTO recipes (title, ingredients, quantity, date_created) VALUES (?, ?, ?, ?)",
    [
      reformattedRecipe.title,
      reformattedRecipe.ingredients,
      reformattedRecipe.quantity,
      reformattedRecipe.date_created
    ]
  );

  return { success: true };
}
