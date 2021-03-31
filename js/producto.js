const product = [
    {
        name: 'Leche', 
        description: 'Un carton de leche',
        price: 17.90,
        clasification: 'Lacteo',
        earningPorcentage: '.30',
        priceSales: 0,
        sixMonthsPrices: [24.0, 24.20, 24.50, 25.0, 25.20, 25.50],
        quantitySold: 8,
        caducity: '21/04/15'
    },{
        name: 'Yogurth', 
        description: 'Un bote de 1 lt',
        price: 30.0,
        clasification: 'Lacteo',
        earningPorcentage: '.25',
        priceSales:0,
        sixMonthsPrices: [38.0, 38.20, 38.50, 39.0, 39.50, 39.80],
        quantitySold: 12,
        caducity: '21/04/21'
    },{
        name: 'Atun', 
        description: 'Una lata de atun',
        price: 10.00,
        clasification: 'Enlatado',
        earningPorcentage: '.20',
        priceSales: 0,
        sixMonthsPrices: [11.20, 11.50, 11.50, 11.80, 12.00, 12.20],
        quantitySold: 70,
        caducity: '24/06/12'
    },{
        name: 'Pan de caja', 
        description: 'Una caja de pan',
        price: 31.0,
        clasification: 'Pan',
        earningPorcentage: '.25',
        priceSales: 0,
        sixMonthsPrices: [40.0, 40.20, 40.50, 40.50, 40.80, 41.0],
        quantitySold: 20,
        caducity: '21/05/02'
    },{
        name: 'Aceite Nutrioli', 
        description: 'Una botella de aceite de 1 lt',
        price: 25.0,
        clasification: 'Aceite',
        earningPorcentage: '.15',
        priceSales: 0,
        sixMonthsPrices: [28.0, 28.20, 28.20, 29.00, 29.50, 29.90],
        quantitySold: 30,
        caducity: 'undefined'
    }
]
function Products(name, description, price, clasification, earningPorcentage, sixMonthsPrices=[], quantitySold, caducity) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.clasification = clasification;
    this.earningPorcentage = earningPorcentage;
    this.sixMonthsPrices = sixMonthsPrices;
    this.quantitySold = quantitySold;
    this.caducity = caducity;
    this.getPriceSales = function() {
        let precio = this.price;
        let porcentaje = this.earningPorcentage;
        let priceSales = (precio * porcentaje) + precio;
        return priceSales;
    }
    this.priceSales = this.getPriceSales();
    this.getDaysLeft = function() {
        let today = new Date();
        console.log(today)
        let expDay = new Date(caducity)
        console.log(expDay)
        let expDate = expDay.getTime();
        console.log(expDate)
        let diferencia = expDate - today.getTime();
        let horasTranscurridas = diferencia / 1000 / 60 / 60;
        return horasTranscurridas/24;
    }
    this.caducityDays = this.getDaysLeft();
    this.getAverageMonths = function(){
        const average = this.sixMonthsPrices.reduce((accum, item) => {
        return (accum + item);
        },0) /this.sixMonthsPrices.length;
        return average
    }
    this.averagePriceMonths = this.getAverageMonths();
}
const products = product.map(item => {
    return new Products(item.name, item.description, item.price, item.clasification, item.earningPorcentage, item.sixMonthsPrices, item.quantitySold, item.caducity);
});
console.log(products)
const aboveFifty = products.filter(item => {
    return item.quantitySold > 50;
})
console.log(aboveFifty)
const underTen = products.filter(item => {
    return item.quantitySold < 10;
})
console.log(underTen)