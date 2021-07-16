google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Días del mes de Junio');
  data.addColumn('number', 'Turno Mañana: 6:00 - 2:00');
  data.addColumn('number', 'Turno Tarde: 2:00 - 10:00');

  data.addRows([
  [01,38.07,48.24],
  [02,39.69,48.33],
  [03,32.43,35.82],
  [04,64.50,42.95],
  [05,50.82,50.04],
  [06,11.15,0],
  [07,45.45,0]
  ]);

  var options = {
    chart: {
      title: '% Utilización de maquinas para la primera semana de Junio 2021'
    },
    width: 900,
    height: 500,
    hAxis: {
      title: 'Días',
      gridlines: { count: 1}
    },
    vAxis: {
      title: '% Utilización',
      gridlines: { count: 1}
    },
    axes: {
      x: {
        0: {side: 'top'}
      }

    }
  };

  var chart = new google.charts.Line(document.getElementById('line_top_x'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}