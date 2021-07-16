google.charts.load('current', {'packages':['line','annotationchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Turno Mañana: 6:00 - 2:00');
  data.addColumn({type:'string', role:'annotation'});
  data.addColumn({type:'string', role:'annotationText'});
  data.addColumn('number', 'Turno Tarde: 2:00 - 10:00');
  data.addColumn({type:'string', role:'annotation'});
  data.addColumn({type:'string', role:'annotationText'});
  

  data.addRows([
    [01,38.07,null,null,48.24,'Comentario','SE PIERDE TIEMPO POR COLORES SIN COLAR Y POR PROBLEMAS CON EL AGUA MUY POCA PRESION'],
    [02,39.69,null,null,48.33,null,null],
    [03,32.43,null,null,35.82,null,null],
    [04,64.50,null,null,42.95,null,null],
    [05,50.82,null,null,50.04,null,null],
    [06,11.15,null,null,0,null,null],
    [07,45.45,null,null,0,null,null],
    [08,47.97,null,null,45.92,null,null],
    [09,40.16,'Comentario', 'SE PIERDE  MUCHO TIEMPO MATIZANDO COLO DE MAQUILA',49.13,null,null],
    [10,37.48,null,null,39.14,null,null],
    [11,48.92,null,null,45.32,null,null],
    [12,48.86,null,null,36.98,null,null],
    [14,25.67,null,null,0,null,null],
    [15,40.22,null,null,40.24,null,null],
    [16,48.68,null,null,33.27,null,null],
    [17,31.65,null,null,46.61,null,null],
    [18,29.07,'Comentario','MUCHA PRDIDA DE TIEMPO POR DISEÑOS SUSPENDIDOS DOS POR GRABACION Y UNO POR RAYAS EN EL  ESTAMPADO', 38.46,null,null],
    [19,44.65,null,null,41.22,null,null],
    [21,53.49,null,null,16.59,null,null]
  ]);

  var options = {
    chart: {
      title: '% Utilización de maquinas para el mes de Junio 2021'
    },
    width: 900,
    height: 500,
    displayAnnotations: true,
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

    },
    annotations: {'column_id': {style: 'line'}},
    displayAnnotations: true
  };

  var chart = new google.charts.Line(document.getElementById('line_top_x'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}


