import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {privateRoutes.map((route) => (
          <Route path={route.path} Component={route.component} key={route.path} />
        ))}
      </Routes>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} Component={route.component} key={route.path} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
