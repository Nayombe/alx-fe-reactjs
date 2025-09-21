import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Update a recipe by id (partial or full)
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        String(r.id) === String(id) ? { ...r, ...updatedFields } : r
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => String(r.id) !== String(id)),
    })),

  // Replace entire recipes array (useful for initialization)
  setRecipes: (recipes) => set({ recipes }),
}));

