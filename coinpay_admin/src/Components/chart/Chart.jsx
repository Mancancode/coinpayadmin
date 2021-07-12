import React from 'react'
import  './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {
    
    return (
        <div className="chart">
             <h3 className='chartTitle'>{title}</h3>
             <ResponsiveContainer width='100%' aspect={4/1}>
                 <LineChart data={data}>
                     <XAxis dataKey="month" stroke="#0a1931"/>
                     <YAxis dataKey="amt"  stroke="#0a1931"/>

                     <Line type="monotone" dataKey={dataKey} stroke="#0a1931"/>
                     <Tooltip/>
                     {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                 </LineChart>

             </ResponsiveContainer>
        </div>
    )
}
