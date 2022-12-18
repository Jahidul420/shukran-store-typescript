import { Cell, Legend, Pie, PieChart } from "recharts";

type Props = {};
const Chart = (props: Props) => {
  type Data = {
    name: String;
    value: Number;
  };
  const data: Data[] = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </PieChart>
    </div>
  );
};

export default Chart;
