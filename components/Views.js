import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { VisitorsDaily } from '../data/visitors'

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

const Activity = () => (
  <div>
    <h2>Visitors</h2>
    <ResponsiveContainer
      width="50%"
      aspect={2}>
      <BarChart
        data={VisitorsDaily(30)}>
        <Bar
          type="monotone"
          dataKey="visitors"
          fill="#6cba00" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default Activity