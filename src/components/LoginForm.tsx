import { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../hooks/storeHooks';
import { setIsAuth } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
const LoginForm: FC = () => {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');
  // const { data } = useGetUserQuery('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submit = () => {
    dispatch(setIsAuth(true));
    navigate('/');
  };
  return (
    <Form>
      <Form.Item label="Имя пользователя" name="email">
        <Input placeholder="admin" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Пароль" name="password">
        <Input
          placeholder="admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submit}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
