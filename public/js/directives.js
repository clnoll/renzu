// // Create the line chart
// app.directive('linearChart', function($window){
//    return{
//       restrict:'EA',
//       template:"<svg width='850' height='200'></svg>",
//        link: function(scope, elem, attrs){

//           d3.csv('resources/challenge-dataset.csv', function(dataset) {

//             var d3 = $window.d3;

//             // console.log(dataset)
//             scope.dataset = dataset
//             scope.subsetVals = []
//             scope.subsetPcts = []
//             scope.seriesNames = []
//             scope.dataset.forEach(function(d) {
//               var format = d3.time.format("%Y/%m/%d");
//               var parseFormat = format.parse(d.Date);
//               d.Date = format.parse(d.Date);
//               if (d.Metric === "DAU") {
//                 d.Value = +d.Value;
//                 scope.subsetVals.push(d)
//                 }
//               else {
//               //   d.pctDate = +d.Date.slice(4,6);
//                 d.Value = +(d.Value.substring(0, d.Value.length - 1));
//                 scope.subsetPcts.push(d)
//               }

//             })

//            var dataToPlot=scope.subsetVals;
//            var w = 500;
//            var h = 200;
//            var padding = 40;
//            var pathClass="path";
//            var xScale, yScale, xAxisGen, yAxisGen, lineFun;
//            // var rawSvg=elem.find('svg');
//            var svg = d3.select('body')
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h);

//            // Stack lines for each app
//            // var stack = function(dataToPlot) {
//            //  d3.svg.line()
//            //  .x(function(d) { return x(d.)})
//            // }


//            function setChartParameters(){
//                xScale = d3.time.scale()
//                    .domain([dataToPlot[0].Date, dataToPlot[dataToPlot.length-1].Date])
//                    .range([padding,w-padding]);

//                yScale = d3.scale.linear()
//                    .domain([0, d3.max(dataToPlot, function (d) {
//                        return d.Value;
//                    })])
//                    .range([h-padding, padding]);

//                xAxisGen = d3.svg.axis()
//                    .scale(xScale)
//                    .orient("bottom")
//                    // .ticks(d3.time.years, 6)
//                    .tickFormat(d3.time.format('%m/%Y'))
//                    .tickSize(2)
//                    .tickPadding(8)

//                yAxisGen = d3.svg.axis()
//                    .scale(yScale)
//                    .orient("left")
//                    .ticks(5)
//                    .tickSize(2);

//                lineFun = d3.svg.line()
//                    .x(function (d) {
//                        return xScale(d.Date);
//                    })
//                    .y(function (d) {
//                        return yScale(d.Value);
//                    })
//                    .interpolate("basis");
//            }

//          function drawLineChart() {

//                setChartParameters();

//                svg.append("svg:g")
//                    .attr("class", "x axis")
//                    .attr("transform", "translate(0,180)")
//                    .call(xAxisGen);

//                svg.append("svg:g")
//                    .attr("class", "y axis")
//                    .attr("transform", "translate(20,0)")
//                    .call(yAxisGen);

//                svg.append("svg:path")
//                    .attr({
//                        d: lineFun(dataToPlot),
//                        "stroke": "blue",
//                        "stroke-width": 2,
//                        "fill": "none",
//                        "class": pathClass
//                    });
//            }

//            drawLineChart();
//         })

//       }

//    };
// });
