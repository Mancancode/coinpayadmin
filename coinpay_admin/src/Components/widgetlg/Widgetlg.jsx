import React from 'react'
import "./widgetlg.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Widgetlg() {
    const data = [
        {
          name: 'BTC',
          LOW: 4000,
          HIGH: 2400,
          amt: 2400,
        },
        {
          name: 'ETH',
          LOW: 3000,
          HIGH: 1398,
          amt: 2210,
        },
        {
          name: 'USDT',
          LOW: 2000,
          HIGH: 9800,
          amt: 2290,
        },
        {
          name: 'BNB',
          LOW: 2780,
          HIGH: 3908,
          amt: 2000,
        },
        {
          name: 'ADA',
          LOW: 1890,
          HIGH: 4800,
          amt: 2181,
        },
        {
          name: 'XRP',
          LOW: 2390,
          HIGH: 3800,
          amt: 2500,
        },
        {
          name: 'DOGE',
          LOW: 3490,
          HIGH: 4300,
          amt: 2100,
        },
      ];
    return (
        
        <div className="widgetlg">
            <div className="widgeTitle">
                <h3 className="WidgetTitle">Cryptocurrency view</h3>
                <ResponsiveContainer width="100%" aspect={3/1} >
                    <BarChart data={data}>
                                  <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="HIGH" fill="#66DE93" stroke="#0a1931" background={{ fill: '#F9F9F9' }} />
          <Bar dataKey="LOW" fill="#DA0037" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
