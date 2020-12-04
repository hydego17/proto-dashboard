export const chartOptions = (data) => {
  return {
    options: {
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "70%",
        },
      },
      colors: ["#2a80d6", "#E91E63"],
      yaxis: {
        title: {
          text: "Person (Million)",
        },
        labels: {
          formatter: function (value) {
            return parseFloat(value / 1000000).toFixed(2);
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: data?.map(({ date }) => date),
      },
    },
    series: [
      {
        name: "Confirmed",
        type: "column",
        data: data?.map(({ confirmed }) => confirmed),
      },
      {
        name: "Deaths",
        type: "column",
        data: data?.map(({ deaths }) => deaths),
      },
    ],
  };
};
