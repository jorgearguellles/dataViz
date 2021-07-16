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
      [07,45.45,0],
      [08,47.97,45.92],
      [09,40.16,49.13],
      [10,37.48,39.14],
      [11,48.92,45.32],
      [12,48.86,36.98],
      [14,25.67,0],
      [15,40.22,40.24],
      [16,48.68,33.27],
      [17,31.65,46.61],
      [18,29.07,38.46],
      [19,44.65,41.22],
      [21,53.49,16.59]
      ]);

      var options = {
        chart: {
          title: '% Utilización de maquinas para el mes de Junio 2021',
          subtitle: '...'
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