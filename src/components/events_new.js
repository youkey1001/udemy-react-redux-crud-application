import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useHistory } from 'react-router-dom';

import { postEvent } from '../actions';

const EventNew = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const renderField = field => {
    const { input, label, type, meta: { touched, error }} = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  const onSubmit = async value => {
    await dispatch(postEvent(value));
    history.push('/');
  }

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div><Field label="Title" name="title" type="text" component={renderField}></Field></div>
      <div><Field label="Body" name="body" type="text" component={renderField}></Field></div>

      <div><input type="submit" value="Submit" disabled={false} /></div>
      <Link to="/">Cancel</Link>
    </form>
  )
}

const validate = value => {
  const errors = {};

  if (!value.title) errors.title = "Enter a title, please.";
  if (!value.body) errors.body = "Enter a body, please.";
  return errors;
}

const createReduxForm = reduxForm({ validate, form: 'eventNewForm'});

export default createReduxForm(EventNew);