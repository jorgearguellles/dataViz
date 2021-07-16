google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Días del mes de Junio');
      data.addColumn('number', 'Turno Mañana: 6:00 - 2:00');
      data.addColumn('number', 'Turno Tarde: 2:00 - 10:00');

      data.addRows([
      [08,47.97,45.92],
      [09,40.16,49.13],
      [10,37.48,39.14],
      [11,48.92,45.32],
      [12,48.86,36.98],
      [14,25.67,0],
      [15,40.22,40.24]
      ]);

      var options = {
        chart: {
          title: '% Utilización de maquinas para la segunda semana de Junio 2021'
        },
        width: 900,
        height: 500,
        hAxis: {
          title: 'Días',
          gridlines: { count: 1 }
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