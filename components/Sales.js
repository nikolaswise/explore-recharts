import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { SalesDaily } from '../data/sales'

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p>${payload[0].payload.amount}</p>
      </div>
    );
  }
  return null;
}

const Sales = () => (
  <div>
    <h2>Total Sales</h2>
    <ResponsiveContainer
      width="99%"
      aspect={2}>
      <LineChart
        data={SalesDaily}>
        <Line
          dot={false}
          activeDot={true}
          strokeWidth={2}
          type="monotone"
          dataKey="transactions"
          stroke="#6cba00" />
        <Tooltip
          content={<CustomTooltip />}/>

        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="#ccc" />

        <XAxis
          padding={{left: 20}}
          tickLine={false}
          axisLine={false}
          dataKey="i" />
        <YAxis
          padding={{bottom: 30}}
          tickLine={false}
          axisLine={false} />

      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default Sales