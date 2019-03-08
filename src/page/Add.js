import React, {Component} from 'react';
import '../style/page/add.css';
import {localStorageKey} from '../data';
import {Form, Field} from 'react-final-form'; //docs https://github.com/final-form/react-final-form

class Add extends Component {
  state = {
    init: {eng: '', rus: ''},
    isAdd: false
  };

  render() {
    const {init, isAdd} = this.state;

    const onSubmit = values => {
      try {
        this.setState({init: {values}, isAdd: true});
        const prevLS = JSON.parse(localStorage.getItem(localStorageKey));
        const newLS = prevLS ? [...prevLS, values] : [values];

        localStorage.setItem(localStorageKey, JSON.stringify(newLS));
        const newInit = Object.create({init: {eng: '', rus: ''}});
        this.setState(newInit);
        setTimeout(()=> this.setState({isAdd: false}), 1000);

      } catch (e) {
        if (e === 'QUOTA_EXCEEDED_ERR') {
          alert('Превышен лимит localStorage!');
        }
        alert('Неизвестная ошибка. Перезагрузите страницу.')
      }

    };
    return (
      <div className='add'>
        <Form
          onSubmit={onSubmit}
          initialValues = {init}
          render={({handleSubmit, form, submitting}) => (
            <form onSubmit={handleSubmit}>
              <label>
                <span>English</span>
                <Field
                  name="eng"
                  component="input"
                  type="text"
                  placeholder="Write word"
                  required
                />
              </label>

              <label>
                <span>Russia</span>
                <Field
                  name="rus"
                  component="input"
                  type="text"
                  placeholder="Translate word"
                  required
                  value='sfsdf'
                />
              </label>
              <button className='add__btn' type="submit">
                {submitting ? 'loading...' : 'Add word'}
                {isAdd && <span>&#10004;</span>}
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default Add;