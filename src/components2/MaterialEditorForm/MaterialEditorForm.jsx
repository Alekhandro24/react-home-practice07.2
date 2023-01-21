import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({
  initialValues = { name: '', url: '' },
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="name" type="text" />
          </label>
          <br />
          <label>
            Ссылка
            <Field name="url" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            {btnText}
          </button>
        </Form>
      )}
    </Formik>
  );
};
