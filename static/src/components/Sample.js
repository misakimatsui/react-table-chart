import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";

export const Sample = () => {
    const data = [
        {
            name: '2010年', 株価: 4000, 配当: 2400,
        },
        {
            name: '2011年', 株価: 3000, 配当: 1398,
        },
        {
            name: '2012年', 株価: 2000, 配当: 9800,
        },
        {
            name: '2013年', 株価: 2780, 配当: 3908,
        },
        {
            name: '2014年', 株価: 1890, 配当: 4800,
        },
        {
            name: '2015年', 株価: 2390, 配当: 3800,
        },
        {
            name: '2016年', 株価: 3490, 配当: 4300,
        },
        {
            name: '2017年', 株価: 5700, 配当: 6300,
        },
        {
            name: '2018年', 株価: 5490, 配当: 3200,
        },
    ];
    return (
        <div>
            <LineChart
                width={700}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval="preserveStartEnd" />
                <YAxis interval="preserveStartEnd" />
                <Legend />
                <Line type="monotone" dataKey="株価" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="配当" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default Sample
