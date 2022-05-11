import React from "react"
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineApexChart = () => {
    const series = [
        {
          name: "STT",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "GT",
          data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: "TLP",
          data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49],
        },
        {
          name: "TLS",
          data: [81, 26, 64, 68, 92, 58, 74, 46, 64, 78,46, 49],
        },
      ]
      const options = {
        chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
        colors: ["#556ee6", "#f46a6a", "#34c38f",'#CF3A59'],
        dataLabels: { enabled: !1 },
        stroke: { width: [3, 4, 3, 3], curve: "straight", dashArray: [0, 0, 0, 0] },
        // title: { text: "Page Statistics", align: "left" },
        markers: { size: 0, hover: { sizeOffset: 6 } },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (e) {
                  return e + " (Piece)"
                },
              },
            },
            {
              title: {
                formatter: function (e) {
                  return e + " Per Unit"
                },
              },
            },
            {
              title: {
                formatter: function (e) {
                  return e + " Per Piece"
                },
              },
            },
          ],
        },
        grid: { borderColor: "#f1f1f1" },
      }
    
      return (
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height="380"
        />
      )
    }

export default LineApexChart
