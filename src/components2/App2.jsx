import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateMaterialPage } from 'components2/pages/CreateMaterial';
import { ListPage } from 'components2/pages/ListPage';
import { Layout } from 'components2/Layout';
import { NotFoundPage } from 'components2/pages/NotFoundPage';
import { EditMaterialModal } from 'components2/EditMaterialModal/EditMaterialModal';

export const App2 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/list" />} />
          <Route path="create" element={<CreateMaterialPage />} />
          <Route path="list/*" element={<ListPage />}>
            <Route path="edit/:materialId" element={<EditMaterialModal />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
