import { FC } from 'react';
import { Layout, Menu, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { logout } from '../store/slices/authSlice';
import users from './../../users.json';
import { useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
  console.log(users.users);
  // const login = (username: string, password: string) => {
  //   users.users.forEach((user) => {
  //     if (user.username === username && user.password === password) {
  //       console.log('Успешная авторизация');
  //     }
  //   });
  // };
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const logoutLog = () => {
    dispatch(logout());
    navigate('/login');
  };
  const navigate = useNavigate();
  return (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            Calendar
          </Menu.Item>
        </Menu>
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user?.email}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logoutLog} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item
              onClick={() => {
                navigate('/login');
              }}
              key={1}
            >
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
