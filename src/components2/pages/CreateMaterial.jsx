import toast from 'react-hot-toast';
import { MaterialEditorForm } from 'components2/MaterialEditorForm/MaterialEditorForm';
import { BackLink } from 'components2/BackLink/BackLink';
import { useAddMaterialMutation } from 'components2/redux/materialsSlice';

export const CreateMaterialPage = () => {
  const [addMaterial] = useAddMaterialMutation();

  const handleAddMaterial = async values => {
    try {
      await addMaterial(values);
      toast.success('Материал добавлен');
    } catch (error) {
      toast.error('Ошибка при добавлении материала');
      console.log(error);
    }
  };

  return (
    <>
      <BackLink href="/list" label="К списку материалов" />
      <MaterialEditorForm
        btnText="Добавить материал"
        onSubmit={handleAddMaterial}
      />
    </>
  );
};
