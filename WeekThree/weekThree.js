google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Días del mes de Junio');
      data.addColumn('number', 'Turno Mañana: 6:00 - 2:00');
      data.addColumn('number', 'Turno Tarde: 2:00 - 10:00');

      data.addRows([
      [16,48.68,33.27],
      [17,31.65,46.61],
      [18,29.07,38.46],
      [19,44.65,41.22],
      [21,53.49,16.59]
      ]);

      var options = {
        chart: {
          title: '% Utilización de maquinas para la tercera semana de Junio 2021'
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