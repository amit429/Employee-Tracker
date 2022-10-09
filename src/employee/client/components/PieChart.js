import React from 'react'
import Chart from 'react-apexcharts'

export default function PieChart(props) {
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
                        tools: {
                            download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                        }
                    },
                    zoom: {
                        enabled: true,
                    },

                    tooltip: {
                        enabled: true,
                        followCursor: true,
                        theme: 'dark',
                        x: {
                            show: true,
                            format: 'dd MMM yyyy',
                        },

                        y: {
                            formatter: function (value) {
                                return value + " mins";
                            }
                        }
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

                labels: ['Breaks', 'Meetings', 'Work'],
            }}
            type="pie"
            series={[44, 55, 41]}
            
        />
    </>
  )
}
