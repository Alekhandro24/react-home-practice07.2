import { useNavigate } from 'react-router-dom';
import { useDeleteMaterialMutation } from 'components2/redux/materialsSlice';

export const Material = ({ item }) => {
  const navigate = useNavigate();
  const [deleteMaterial, { isLoading }] = useDeleteMaterialMutation();

  return (
    <div>
      <p>
        <b>Название:</b> {item.name}
      </p>
      <p>
        <b>Ссылка:</b> {item.url}
      </p>
      <button
        type="button"
        onClick={() => deleteMaterial(item.id)}
        disabled={isLoading}
      >
        Удалить
      </button>
      <button type="button" onClick={() => navigate(`/list/edit/${item.id}`)}>
        Редактировать
      </button>
    </div>
  );
};
