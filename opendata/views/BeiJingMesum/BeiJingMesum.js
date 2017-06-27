/**
 * Created by Yao on 27/6/2017.
 */
var tabulate = function (data,columns) {
    var table = d3.select('body').append('table')
    var thead = table.append('thead')
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function (d) { return d })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function (column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value })

    return table;
}

d3.csv('../opendata/BeijingMesuem.csv',function (data) {
    var columns = ["名称","通讯地址","邮编","电话"]
    console.log(columns);
    tabulate(data,columns)
})