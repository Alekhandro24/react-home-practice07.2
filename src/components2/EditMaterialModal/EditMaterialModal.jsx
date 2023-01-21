import { useNavigate, useParams } from 'react-router-dom';
import { MaterialEditorForm } from 'components2/MaterialEditorForm/MaterialEditorForm';
import { Overlay, Modal } from './EditMaterialModal.styled';
import {
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} from 'components2/redux/materialsSlice';

export const EditMaterialModal = () => {
  const { materialId } = useParams();
  const { data: material } = useGetMaterialByIdQuery(materialId);
  const [updateMaterial] = useUpdateMaterialMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/list');

  const handleUpdateMaterial = async fields => {
    try {
      await updateMaterial({ id: materialId, ...fields });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Modal>
        {material && (
          <MaterialEditorForm
            initialValues={{ name: material.name, url: material.url }}
            btnText="Сохранить изменения"
            onSubmit={handleUpdateMaterial}
          />
        )}

        <button type="button" onClick={closeModal}>
          Закрыть
        </button>
      </Modal>
    </Overlay>
  );
};
