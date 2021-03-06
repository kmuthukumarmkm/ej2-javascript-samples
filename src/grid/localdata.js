this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderData,
        allowPaging: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 130, format: 'yMd', textAlign: 'right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};