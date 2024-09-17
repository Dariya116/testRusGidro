import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './sideBar.module.scss';

import { IconFactory, IconFileDown, IconMap, IconNotebookTabs } from '../../../public/icons/index';
import { Header } from '../header/Header';

interface SideBarType {
  img?: React.ReactNode;
  name?: string;
  to: string;
}

 export const SideBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('');

 const location = useLocation();

 const getClassName = (item: SideBarType) => {
   return location.pathname === item.to ? style.icon_active : style.icon;
 };

  const handleItemClick = (item: SideBarType) => {
    setActiveItem(item.to);
    navigate(item.to);
  };
 const sideBarItems: SideBarType[] = [
   {
     img: <IconMap className={getClassName({ to: '/map' })} />,
     name: 'Сравнительный анализ',
     to: '/map',
   },
   {
     img: <IconFactory className={getClassName({ to: '/factory' })} />,
     name: 'Выбросы парниковых газов',
     to: '/factory',
   },
   {
     img: <IconFileDown className={getClassName({ to: '/file' })} />,
     name: 'Исходные данные',
     to: '/file',
   },
   {
    img: <IconNotebookTabs className={getClassName({ to: '/' })} />,
     name: 'Сетевые коэффициенты выбросов',
     to: '/',
   },
 ];

  return (
    <div className={style.box}>
      <Header />
      <nav className={style.box__sideBar}>
        {sideBarItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className={activeItem === item.to ? style.box__sideBar_active : ''}>
            {item.img}
            <div>
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

