import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Delete this recipe? This action cannot be undone.');
    if (!confirmed) return;

    deleteRecipe(recipeId);
    // after deletion, go back to list
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: '#d9534f', border: 'none', padding: '8px 12px', borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
