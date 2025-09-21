import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const searchTerm = useRecipeStore((s) => s.searchTerm);

  const listToShow =
    searchTerm.trim().length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {listToShow.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        listToShow.map((r) => (
          <div
            key={r.id}
            style={{
              border: '1px solid #ddd',
              padding: 12,
              marginBottom: 10,
              borderRadius: 6,
            }}
          >
            <h3 style={{ margin: 0 }}>{r.title}</h3>
            <p style={{ marginTop: 6 }}>{r.description}</p>
            <div style={{ marginTop: 8 }}>
              <Link to={`/recipes/${r.id}`} style={{ marginRight: 12 }}>
                View
              </Link>
              <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
