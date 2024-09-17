import { Route, Routes } from 'react-router-dom';
import { Home, Map, File, Factory } from '../pages/index';
import { SideBar } from '../components';
import style from './index.module.scss'

export const AppRouter = () => (
  <div className={style.wrapper}>
    <SideBar />
    <div className={style.wrapper__right}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Map />} path="/map" />
        <Route element={<File />} path="/file" />
        <Route element={<Factory />} path="/factory" />
      </Routes>
    </div>
  </div>
);
