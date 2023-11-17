import { Form, Input, Modal, Select, Tooltip } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { groupsApi } from '../../../entities/groups/api/groups.api.js';
import './index.scss';

const generateOptions = (option) => {
  if (option.rating > 0) {
    return {
      key: option.reason,
      label: (
        <Tooltip title={option.reason}>
          <div className={'reason_element'}>
            <span>
              {option.reason} <span className={'plus_rating'}>{option.rating}</span>
            </span>
          </div>
        </Tooltip>
      ),
      value: option.rating,
    };
  }
  return {
    key: option.reason,
    label: (
      <Tooltip title={option.reason + ': ' + option.rating}>
        <div className={'reason_element'}>
          <span>
            {option.reason} <span className={'minus_rating'}>{option.rating}</span>
          </span>
        </div>
      </Tooltip>
    ),
    value: option.rating,
  };
};

const EditRatingDialog = ({ open, handleOk, handleCancel }) => {
  const { useGetReasonsQuery } = groupsApi;
  const request = useGetReasonsQuery();
  const options = request.data?.reasons.map((el) => generateOptions(el)) || [];

  const formik = useFormik({
    initialValues: {
      rating: '',
      reason: '',
    },
    onSubmit: (values, resetForm) => {
      console.log(values);
      resetForm();
    },
  });

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Modal centered title="Изменение рейтинга" open={open} onOk={handleOk} onCancel={handleCancel}>
      <Select style={{ width: '100%' }} options={options} onChange={handleChange} />

      <Form onFinish={formik.handleSubmit}>
        <Form.Item>
          <Input
            style={{
              width: '70px',
            }}
            name={'rating'}
            value={formik.values.rating}
            onChange={formik.handleChange}
            type={'number'}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditRatingDialog;
