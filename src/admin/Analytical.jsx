import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell
} from "recharts";

const ordersPerDay = [
  { day: "Mon", orders: 12 },
  { day: "Tue", orders: 19 },
  { day: "Wed", orders: 8 },
  { day: "Thu", orders: 15 },
  { day: "Fri", orders: 22 },
  { day: "Sat", orders: 30 },
  { day: "Sun", orders: 18 },
];

const revenueGrowth = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 27000 },
  { month: "Jun", revenue: 32000 },
];

const customersGrowth = [
  { month: "Jan", customers: 50 },
  { month: "Feb", customers: 75 },
  { month: "Mar", customers: 65 },
  { month: "Apr", customers: 90 },
  { month: "May", customers: 120 },
  { month: "Jun", customers: 150 },
];
const productSales = [
  { product: "Rice", sales: 120 },
  { product: "Wheat", sales: 98 },
  { product: "Sugar", sales: 86 },
  { product: "Oil", sales: 140 },
  { product: "Dal", sales: 110 },
];
const revenueAdvanced = [
  { month: "Jan", revenue: 12000, profit: 4000 },
  { month: "Feb", revenue: 18000, profit: 6000 },
  { month: "Mar", revenue: 15000, profit: 5000 },
  { month: "Apr", revenue: 22000, profit: 8000 },
];
const COLORS = ["#821300", "#2FA999", "#FFBB28", "#FF8042", "#8884d8"];
const Analytical = () => {
  return (
    <>
      <div className="h-[90vh] lg:h-[86vh] py-2 px-6 lg:py-4 lg:px-12 overflow-auto scrollbar-hide flex flex-col ">
        <div className="lg:w-2/3 w-full ">
          <h2 className="font-heading font-extrabold text-xl m-4">
            Orders this weak
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersPerDay}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                type="monotone"
                dataKey="orders"
                stroke="#8884d8"
                fill="#C36137"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:w-2/3 w-full ">
          <h2 className="font-heading font-extrabold text-xl m-4">
            Revnue Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueGrowth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#2FA999"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:w-2/3 w-full ">
          <h2 className="font-heading font-extrabold text-xl m-4">
            Customers Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customersGrowth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                type="monotone"
                dataKey="customers"
                stroke="#8884d8"
                fill="#C36137"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:w-2/3 w-full ">
          <h2 className="font-heading font-extrabold text-xl m-4">
            Product Sales
          </h2>
          <ResponsiveContainer width="100%" height={300}>
        <PieChart>
         <Pie
  data={productSales}
  dataKey="sales"
  nameKey="product"
  cx="50%"
  cy="50%"
  outerRadius={100}
  label
>
  {productSales.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
</Pie>
          <Tooltip />
          <Legend />
        </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:w-2/3 w-full ">
          <h2 className="font-heading font-extrabold text-xl m-4">
            Revenue VS Profit
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueAdvanced}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#C36137"
              />
              <Bar
                type="monotone"
                dataKey="profit"
                stroke="#4444f8"
                fill="#2FA999"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Analytical;
