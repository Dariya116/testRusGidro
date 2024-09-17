import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import style from './chart.module.scss';
import { MOCK_TYPE } from '../../data/mock_type';
import { Clock, Diagonal, Menu, Table } from '../../../public/icons/index';

interface ChartProps {
  title: string;
  dataSource: MOCK_TYPE[];
}

Chart.register(...registerables);

export const ChartLine = ({ title, dataSource }: ChartProps) => {
  return (
    <div className={style.chart}>
      <div className={style.title__box}>
        <h5>{title}</h5>
        <div className={style.icons}>
          {' '}
          <Clock /> <Table /> <Menu /> <Diagonal />
        </div>
      </div>
      <Line
        className={style.wrapper}
        data={{
          labels: dataSource.map((data) => data.label),

          datasets: [
            {
              label: 'Ленинград',
              data: dataSource.map((data) => data.leningrad),
              backgroundColor: '#005D9F',
              borderColor: '#005D9F',
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              label: 'Мурманск',
              data: dataSource.map((data) => data.murmansk),
              backgroundColor: '#F08400',
              borderColor: '#F08400',
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              label: 'Новгород',
              data: dataSource.map((data) => data.novgorod),
              backgroundColor: '#27AE60',
              borderColor: '#27AE60',
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              label: 'Псков',
              data: dataSource.map((data) => data.pskov),
              backgroundColor: '#FBBF24',
              borderColor: '#FBBF24',
              pointRadius: 0,
              borderWidth: 2,
            },
            {
              label: 'Карелия',
              data: dataSource.map((data) => data.karelia),
              backgroundColor: '#FCA5A5',
              borderColor: '#FCA5A5',
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};
