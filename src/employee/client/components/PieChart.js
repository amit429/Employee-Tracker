import React from 'react'
import Chart from 'react-apexcharts'

export default function PieChart() {
  return (
    <>
        <Chart
            width={"200%"}
            options={{
                chart: {
                    id: "current-day",
                    type: 'pie',
                    toolbar: {
                        show: true,
                        autoSelected: 'pan',
                    },
                    zoom: {
                        enabled: true,
                    },

                    dropShadow: {
                        enabled: false,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    enabled: true,
                },

                plotOptions: {
                    pie: {
                        expandOnClick: true,
                    }
                },

                legend: {
                    show: true,
                },

                title: {
                    text: 'Current Day Analysis',
                    align: 'center',
                    margintop: 20,
                    style: {
                        fontSize: '30px',
                        fontWeight: 1000,
                    }
                },

                value: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                  },

                noData: {
                    text: undefined,
                    align: 'center',
                    verticalAlign: 'middle',
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                      color: undefined,
                      fontSize: '14px',
                      fontFamily: undefined
                    }
                  },

                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            }}
            type="pie"
            series={[30,40,50,60,70]}
            
        />
    </>
  )
}
