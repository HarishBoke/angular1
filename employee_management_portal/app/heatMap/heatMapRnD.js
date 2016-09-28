'use strict';
angular.module('heatMapRnD', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/heatMapRnD', {
    templateUrl: 'heatMap/heatMapRnD.html',
    controller: 'heatMapRnDCtrl'
  });
}])

.controller('heatMapRnDCtrl', function($scope, $http) {
	var element = angular.element(document.querySelector('#container'));
    $(element).highcharts({
   	    chart: {
            type: 'heatmap',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 450,
            width: 550
        },
        title: {
            text: '',
            align: 'center',
            verticalAlign: 'middle',
            floating: true
        },

        colors: [[0,'#31cfce'], [1,'#ff9e08'], [2,'#99CC71'], [3,'#DC9650'], [4,'#6BC5DF'], [5,'#EBCF5F'], [7,'#66D3A1'], [8,'orange'], [9,'pink'], [10,'gray']],
    	exporting:{
        	enabled: true,
        	url: '/highcharts-export-web/'
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },
        legend: {
        	enabled : false,
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            //categories: chart.categories,
            labels: {
                enabled: false
            },
            title: null,
            gridLineWidth: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            //categories: chart.categories,
            labels: {
                enabled: false
            },
            title: null,
            gridLineWidth: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0
        },
        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
		plotOptions: {
            heatmap: {
                cursor: 'pointer'
            },
            series: {point: {events: {mouseOver: function(){
                this.graphic.element.style.cursor = this.cursor;
            }}}}
        },     
        series: [{
        	name: '',
            borderWidth: 1,
            borderColor: 'white',
            showInLegend: false,
            tooltip: {
                headerFormat: ''
            },
            data: [[0,0,'In attesa di accettazione Server Admin Microsoft'],
            		[0,1,'In attesa di accettazione Server Admin Microsoft'],
            		[0,2,'inprogess Microsoft administrator'],
            		[1,0,'Pending approved server admin'],
            		[1,1,'Completed server admin'],
            		[1,2,'Pending approved server admin'],
            		[2,0,'inprogess Microsoft administrator'],
            		[2,1,'Completed server admin'],
            		[2,2,'Pending approved server admin']],
            	
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                verticalAlign: 'middle',
                align: 'center',
                backgroundColor: 'transparent',
                overflow: 'none',
                crop: true,
                useHTML: true,
                formatter: function () {
                        var str = this.point.value;
                        var splitStr = str.split(" ");
                        console.log(this);
                        //NOTE:  in our product we max 1 or 2 words on a line and we use <br> to break strings like below algorithm 
                        
                        /*var strValue = "";
                        for(var i = 0; i < splitStr.length; i++){
                            console.log(splitStr[i]);
                            if(i == splitStr.length-1){
                                strValue = strValue + splitStr[i];
                            }
                            else{
                                strValue = strValue + splitStr[i] + '<br>';    
                            }
                            
                        }*/
                    if (this.point.value !== null && this.point.value !== undefined) {
                        return '<b>' + this.point.index + '</b>  <br> <br> '  + 
                            '<b>' + str + '<b> ';
                        }
                           //  return '$' + this.point.name
                },
                                    
            }
        }]
                });
       	$(element).addClass('heatmapChart');
        
});