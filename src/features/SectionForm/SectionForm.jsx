import React, { useEffect, useCallback } from 'react';

import {
  fetchPositionsList,
  fetchToken,
  fetchUsersList,
  positionsListSelector,
  postUserData,
} from '../../store/app';

import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { validationSchema } from '../../validations/validationSchema';
import { Button, Input, InputRadio, UploadPhoto } from '../../components';

import './sectionForm.scss';

export const SectionForm = (props) => {
  const dispatch = useDispatch();
  const positionsList = useSelector(positionsListSelector);

  useEffect(() => {
    dispatch(fetchPositionsList());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      photo: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const tokenAction = await dispatch(fetchToken());

        const token = tokenAction.payload;

        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('position_id', values.position);
        formData.append('photo', values.photo, 'filename');

        await dispatch(postUserData({ data: formData, token: token.token }));
        await dispatch(fetchUsersList({ count: 6 }));
        resetForm({ values: formik.initialValues });
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handlePhotoChange = useCallback(
    (event) => {
      const file = event.currentTarget.files[0];

      formik.setFieldValue('photo', file);
    },
    [formik],
  );

  return (
    <section className="section-form">
      <h1>Working with POST request</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Your name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <Input
          placeholder="Phone"
          name="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
          errorMessage={formik.touched.phone && formik.errors.phone}
        />
        <p>+38 (XXX) XXX - XX - XX</p>
        <div className="select-positions">
          <h2>Select your position</h2>
          {positionsList.positions
            ? positionsList.positions.map((position) => (
                <InputRadio
                  key={position.id}
                  name="position"
                  value={position.id}
                  title={position.name}
                  onChange={formik.handleChange}
                />
              ))
            : 'No positions available'}
          {formik.touched.position && formik.errors.position && (
            <span className="error-message">{formik.errors.position}</span>
          )}
        </div>
        <UploadPhoto
          name="photo"
          value={formik.values.photo}
          onChange={handlePhotoChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.touched.photo && formik.errors.photo}
        />
        <Button type="submit" title="Sign up" />
      </form>
    </section>
  );
};
