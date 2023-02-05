import React, { useState, useContext, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { AppContext } from "../context/AppContext";

const COLORS = ["#41679f", "#369f6f", "#7191d1"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpenseChart = () => {
  const { budget, expenses } = useContext(AppContext);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    if (expenses?.length) {
      const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);

      setExpenseData([
        { name: "Expense", value: totalExpenses },
        { name: "Remaining", value: budget - totalExpenses },
        { name: "Budget", value: budget },
      ]);
    }
  }, [expenses]);
  console.log(expenseData, expenses);
  return (
    <ResponsiveContainer width="110%" height="100%">
      <PieChart width={1000} height={700}>
        <Pie
          data={expenseData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {expenseData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
