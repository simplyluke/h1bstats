


$(function visaStatistics() {
    
    var visaMultiple = 1.83;
    var visaQuantity = 100;
    var jobsCreated = visaMultiple * visaQuantity;
    
    console.log(visaQuantity);

        
 
    chartOptions = {
        chart: {
            renderTo: 'stats-chart',
            type: 'column'
        },
        title: {
            text: 'Jobs Created by H-1B Visas'
        },
        subtitle: {
            text: 'Source: <a href="http://www.hks.harvard.edu/fs/gborjas/publications/popular/CIS2013.pdf" target="_blank">Center for Immigration Studies (link)</a>'
        },
        xAxis: {
            categories: [
                '# of H-1B Visas'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
//        tooltip: {
//            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
//            footerFormat: '</table>',
//            shared: true,
//            useHTML: true
//        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '# of H-1B Visas',
            data: [visaQuantity]

        }, {
            name: '# of Jobs Created',
            data: [jobsCreated]

        }]
    };
        
    chart = new Highcharts.Chart(chartOptions);
    

    
    $('#stats-form').submit( function(e) {
            e.preventDefault();
            var newQuantity = parseInt($('#visa-quantity').val());
            chart.series[0].setData([newQuantity],true);
            chart.series[1].setData([newQuantity*visaMultiple],true);
            console.log(newQuantity);
    });
    
});