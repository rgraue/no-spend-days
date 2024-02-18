import React from 'react';
import { Input, Layout } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { addTodo } from '@store';
import { MyButton } from './myButton.component';
import { useState } from 'react';
import { TodoRealmContext, Todo } from '@appRealm';
import Realm from 'realm';

const { useRealm } = TodoRealmContext;

export const TodoForm = () => {
  const [todoName, setTodoName] = useState('');
  const realm = useRealm();

  const dispatch = useDispatch();

  function handleAddTodo() {
    const id = new Realm.BSON.ObjectId();
    dispatch(
      addTodo({
        id: id.toHexString(),
        name: todoName,
      }),
    );
    console.log('redux write', todoName, id);
    realm.write(() => {
      realm.create('Todo', Todo.generate(id, todoName));
      console.log('realm write', todoName, id);
    });
  }

  return (
    <Layout>
      <Input
        placeholder="Enter todo"
        value={todoName}
        onChangeText={nextValue => setTodoName(nextValue)}
      />
      <MyButton text={'Add Todo'} buttonHandler={handleAddTodo} />
    </Layout>
  );
};
