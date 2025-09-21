import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet — add one!</p>
      ) : (
        recipes.map((r) => (
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
