import { Route, Routes } from 'react-router-dom';
import { Home, Map, File, Factory } from '../pages/index';
import { SideBar } from '../components';

export const AppRouter = () => (
  <div style={{ display: 'flex' }}>
    <SideBar />
    <div style={{ width: '100%' }}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Map />} path="/map" />
        <Route element={<File />} path="/file" />
        <Route element={<Factory />} path="/factory" />
      </Routes>
    </div>
  </div>
);
