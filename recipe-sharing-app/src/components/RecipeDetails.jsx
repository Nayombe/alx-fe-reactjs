import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(id))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p style={{ color: '#666' }}>
        Created: {recipe.createdAt ? new Date(recipe.createdAt).toLocaleString() : '—'}
      </p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 12 }}>
          Edit
        </Link>
        <DeleteRecipeButton recipeId={id} />
      </div>
      <div style={{ marginTop: 20 }}>
        <Link to="/">Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
