import React from 'react'
import FeaturedInfo from '../../Components/FeatuturedInfo/FeaturedInfo'
import Chart from '../../Components/chart/Chart' 
import {chartData} from '../../Components/Chartdata'
import Widgetsm from '../../Components/widgetsm/Widgetsm'
import Widgetlg from '../../Components/widgetlg/Widgetlg'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={chartData} title="Revenue Analytics" grid dataKey="Active Revenue"/>
            <div className="homeWidget">
            <Widgetsm/>
            <Widgetlg/>
            </div>
        </div>
    )
}
