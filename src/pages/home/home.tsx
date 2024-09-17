import { ChartLine } from '../../components/index';
import { TopMenu } from '../../components/topMenu/TopMenu';
import style from './home.module.scss';

import northwest from '../../data/mock_northwest.json';
import center from '../../data/mock_center.json';
import south from '../../data/mock_south.json';
import volga from '../../data//mock_volga.json';

export const Home = () => {
  return (
    <>
      <TopMenu title="Анализ по РГЕ" />
      <div className={style.charts}>
        <ChartLine title="Региональные выбросы ОЭС Северо-Запада" dataSource={northwest} />
        <ChartLine title="Региональные выбросы ОЭС Центра" dataSource={center} />
        <ChartLine title="Региональные выбросы ОЭС Юга" dataSource={south} />
        <ChartLine title="Региональные выбросы ОЭС Средней Волги" dataSource={volga} />
      </div>
    </>
  );
};
