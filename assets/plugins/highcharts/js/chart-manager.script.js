$(function () {
  "use strict";

  // NOTE: CHART MANAGER
  // Create the chart All Cabang
  Highcharts.chart("content-AllCabang", {
    chart: {
      type: "column",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "All Cabang",
    },
    // subtitle: {
    //   text: "",
    // },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total participants",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total 111<br/>',
    },
    series: [
      {
        name: "All Cabang",
        colorByPoint: true,
        data: [
          {
            name: "A",
            y: 34,
            drilldown: "A",
          },
          {
            name: "B",
            y: 12,
            drilldown: "B",
          },
          {
            name: "C",
            y: 23,
            drilldown: "C",
          },
          {
            name: "D",
            y: 18,
            drilldown: "D",
          },
          {
            name: "E",
            y: 24,
            drilldown: "E",
          },
        ],
      },
    ],
    // drilldown: {
    //   series: [
    //     {
    //       name: "Chrome",
    //       id: "Chrome",
    //       data: [
    //         ["v65.0", 0.1],
    //         ["v64.0", 1.3],
    //         ["v63.0", 53.02],
    //         ["v62.0", 1.4],
    //         ["v61.0", 0.88],
    //         ["v60.0", 0.56],
    //         ["v59.0", 0.45],
    //         ["v58.0", 0.49],
    //         ["v57.0", 0.32],
    //         ["v56.0", 0.29],
    //         ["v55.0", 0.79],
    //         ["v54.0", 0.18],
    //         ["v51.0", 0.13],
    //         ["v49.0", 2.16],
    //         ["v48.0", 0.13],
    //         ["v47.0", 0.11],
    //         ["v43.0", 0.17],
    //         ["v29.0", 0.26],
    //       ],
    //     },
    //     {
    //       name: "Firefox",
    //       id: "Firefox",
    //       data: [
    //         ["v58.0", 1.02],
    //         ["v57.0", 7.36],
    //         ["v56.0", 0.35],
    //         ["v55.0", 0.11],
    //         ["v54.0", 0.1],
    //         ["v52.0", 0.95],
    //         ["v51.0", 0.15],
    //         ["v50.0", 0.1],
    //         ["v48.0", 0.31],
    //         ["v47.0", 0.12],
    //       ],
    //     },
    //     {
    //       name: "Internet Explorer",
    //       id: "Internet Explorer",
    //       data: [
    //         ["v11.0", 6.2],
    //         ["v10.0", 0.29],
    //         ["v9.0", 0.27],
    //         ["v8.0", 0.47],
    //       ],
    //     },
    //     {
    //       name: "Safari",
    //       id: "Safari",
    //       data: [
    //         ["v11.0", 3.39],
    //         ["v10.1", 0.96],
    //         ["v10.0", 0.36],
    //         ["v9.1", 0.54],
    //         ["v9.0", 0.13],
    //         ["v5.1", 0.2],
    //       ],
    //     },
    //     {
    //       name: "Edge",
    //       id: "Edge",
    //       data: [
    //         ["v16", 2.6],
    //         ["v15", 0.92],
    //         ["v14", 0.4],
    //         ["v13", 0.1],
    //       ],
    //     },
    //     {
    //       name: "Opera",
    //       id: "Opera",
    //       data: [
    //         ["v50.0", 0.96],
    //         ["v49.0", 0.82],
    //         ["v12.1", 0.14],
    //       ],
    //     },
    //   ],
    // },
  });

  // Create the chart Cabang Samarinda
  Highcharts.chart("content-Samarinda", {
    chart: {
      type: "column",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Samarinda",
    },
    // subtitle: {
    //   text: "",
    // },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total participants",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total 111<br/>',
    },
    series: [
      {
        name: "Samarinda",
        colorByPoint: true,
        data: [
          {
            name: "A",
            y: 12,
            drilldown: "A",
          },
          {
            name: "B",
            y: 12,
            drilldown: "B",
          },
          {
            name: "C",
            y: 23,
            drilldown: "C",
          },
          {
            name: "D",
            y: 18,
            drilldown: "D",
          },
          {
            name: "E",
            y: 24,
            drilldown: "E",
          },
        ],
      },
    ],
    // drilldown: {
    //   series: [
    //     {
    //       name: "Chrome",
    //       id: "Chrome",
    //       data: [
    //         ["v65.0", 0.1],
    //         ["v64.0", 1.3],
    //         ["v63.0", 53.02],
    //         ["v62.0", 1.4],
    //         ["v61.0", 0.88],
    //         ["v60.0", 0.56],
    //         ["v59.0", 0.45],
    //         ["v58.0", 0.49],
    //         ["v57.0", 0.32],
    //         ["v56.0", 0.29],
    //         ["v55.0", 0.79],
    //         ["v54.0", 0.18],
    //         ["v51.0", 0.13],
    //         ["v49.0", 2.16],
    //         ["v48.0", 0.13],
    //         ["v47.0", 0.11],
    //         ["v43.0", 0.17],
    //         ["v29.0", 0.26],
    //       ],
    //     },
    //     {
    //       name: "Firefox",
    //       id: "Firefox",
    //       data: [
    //         ["v58.0", 1.02],
    //         ["v57.0", 7.36],
    //         ["v56.0", 0.35],
    //         ["v55.0", 0.11],
    //         ["v54.0", 0.1],
    //         ["v52.0", 0.95],
    //         ["v51.0", 0.15],
    //         ["v50.0", 0.1],
    //         ["v48.0", 0.31],
    //         ["v47.0", 0.12],
    //       ],
    //     },
    //     {
    //       name: "Internet Explorer",
    //       id: "Internet Explorer",
    //       data: [
    //         ["v11.0", 6.2],
    //         ["v10.0", 0.29],
    //         ["v9.0", 0.27],
    //         ["v8.0", 0.47],
    //       ],
    //     },
    //     {
    //       name: "Safari",
    //       id: "Safari",
    //       data: [
    //         ["v11.0", 3.39],
    //         ["v10.1", 0.96],
    //         ["v10.0", 0.36],
    //         ["v9.1", 0.54],
    //         ["v9.0", 0.13],
    //         ["v5.1", 0.2],
    //       ],
    //     },
    //     {
    //       name: "Edge",
    //       id: "Edge",
    //       data: [
    //         ["v16", 2.6],
    //         ["v15", 0.92],
    //         ["v14", 0.4],
    //         ["v13", 0.1],
    //       ],
    //     },
    //     {
    //       name: "Opera",
    //       id: "Opera",
    //       data: [
    //         ["v50.0", 0.96],
    //         ["v49.0", 0.82],
    //         ["v12.1", 0.14],
    //       ],
    //     },
    //   ],
    // },
  });

  // chart Base On Level
  Highcharts.chart("level-AllCabang", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "All Cabang",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b> Employee",
    },
    // accessibility: {
    //   point: {
    //     valueSuffix: "%",
    //   },
    // },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y} Employee",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Level 1",
            y: 13,
          },
          {
            name: "Level 2",
            y: 41,
          },
          {
            name: "Level 3",
            y: 13,
          },
          {
            name: "Level 4",
            y: 23,
          },
          {
            name: "Level 5",
            y: 12,
          },
          {
            name: "Level 6",
            y: 32,
          },
          {
            name: "Level 7",
            y: 61,
            sliced: true,
            selected: true,
          },
        ],
      },
    ],
  });

  // chart Base On Level
  Highcharts.chart("level-Samarinda", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Samarinda",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b> Employee",
    },
    // accessibility: {
    //   point: {
    //     valueSuffix: "%",
    //   },
    // },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y} Employee",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Level 1",
            y: 31,
          },
          {
            name: "Level 2",
            y: 41,
          },
          {
            name: "Level 3",
            y: 13,
          },
          {
            name: "Level 4",
            y: 23,
          },
          {
            name: "Level 5",
            y: 12,
          },
          {
            name: "Level 6",
            y: 32,
          },
          {
            name: "Level 7",
            y: 61,
            sliced: true,
            selected: true,
          },
        ],
      },
    ],
  });

  //   Chart Training Participant Regional Barat
  Highcharts.chart("participant-ParticipantBarat", {
    chart: {
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Regional Barat",
    },
    xAxis: {
      categories: [
        "Purwokerto",
        "Bandung",
        "Surabaya",
        "Banda Aceh",
        "Lampung",
        "Samarinda",
        "Balikpapan",
        "Jakarta",
        "Semarang",
        "Bali",
        "Makassar",
      ],
    },
    // labels: {
    //   items: [
    //     {
    //       html: "Total fruit consumption",
    //       style: {
    //         left: "50px",
    //         top: "18px",
    //         color:
    //           // theme
    //           (Highcharts.defaultOptions.title.style &&
    //             Highcharts.defaultOptions.title.style.color) ||
    //           "black",
    //       },
    //     },
    //   ],
    // },
    series: [
      {
        type: "column",
        name: "Target",
        data: [3, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        type: "column",
        name: "Actual",
        data: [2, 3, 5, 7, 6, 9, 10, 11, 12, 13, 14],
      },
      {
        type: "spline",
        name: "Level > 3",
        data: [3, 6, 3, 7, 9, 8, 3, 11, 3, 6, 3],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
      },
      //   {
      //     type: "pie",
      //     name: "Total consumption",
      //     data: [
      //       {
      //         name: "Target",
      //         y: 13,
      //         color: Highcharts.getOptions().colors[0], // Jane's color
      //       },
      //       {
      //         name: "Actual",
      //         y: 23,
      //         color: Highcharts.getOptions().colors[1], // John's color
      //       },
      //     ],
      //     center: [100, 80],
      //     size: 100,
      //     showInLegend: false,
      //     dataLabels: {
      //       enabled: false,
      //     },
      //   },
    ],
  });
});
