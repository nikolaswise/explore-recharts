import {
  ResponsiveContainer,
  LineChart,
  Line,
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
    <h2>Photo Activity</h2>
    <ResponsiveContainer
      width="50%"
      aspect={2}>
      <LineChart
        data={VisitorsDaily(7)}>
        <Line
          dot={false}
          activeDot={true}
          strokeWidth={2}
          type="monotone"
          dataKey="visitors"
          stroke="#6cba00" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default Activity