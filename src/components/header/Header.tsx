import { Menu, Logo } from '../../../public/icons/index';
import style from './header.module.scss';
export const Header = () => {
  return (
    <header className={style.header}>
      <Menu />
      <Logo />
    </header>
  );
};
