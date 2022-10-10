import React from 'react'
import Chart from 'react-apexcharts'

export default function BarChart() {
  return (
    <>
        <Chart
            type= 'bar'
            width={"100%"}
            height={"500px"}
            options={{
              xaxis: {
                categories: ['Week1', 'Week2', 'Week3', 'Week4']
              },

                chart: {
                  type: 'bar',
                  height: 350,
                },

                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                  }
                }
            }} 
            
            series={[{
              name: 'Work',
              data: [44, 55, 41, 67]
            },
            {
              name: 'Meetings',
              data: [13, 23, 20, 8]
            },
            {
              name: 'Breaks',
              data: [11, 17, 15, 15]
            }
          ]}
        />
    </>
  )
}
