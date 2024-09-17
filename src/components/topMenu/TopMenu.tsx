import { IconDown } from '../../../public/icons';
import style from './topMenu.module.scss';

export const TopMenu = ({ title }: { title: string }) => {
  return (
    <div className={style.top}>
      <p>{title}</p>
      <div className={style.top__group}>
        <p>Фамилия Имя</p>
        <IconDown />
      </div>
    </div>
  );
};
