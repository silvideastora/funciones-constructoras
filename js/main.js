/*function Koder(name, lastName, generation, birthDate, bootcamp, scores=[90, 80, 95, 100]) {
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.birthDate = birthDate;
    this.country = country;
    this.bootcamp = bootcamp;
    this.school = 'Kodemia';//
    this.scores = scores;
    this.greet = function() {
        console.log(`Hola Mi nombre es ${name} y soy de la generación ${this.generation}º de ${this.bootcamp}`)
    }//
    this.asking = function(question, mentor) {
        console.log(`${mentor} tengo duda sobre: ${question}`)
    this.getAge = function (){
        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear()
    
    }
    }//
//}

//const koderDiana = new Koder('Diana', 'Ibañez', 11, '1992/06/03', 'Peru', 'JavaScript', 'KoderHause')
//const koderTaquito = new Koder('Vero', 'Paredes', 11, '1992/06/03', 'Mexico', 'JavaScript')



console.log(koderDiana)
console.log(koderTaquito)*/

const productCollection = [
    {
        name: "Leche",
        description: "Carton",
        price: 16,
        clasification: "Lacteo",
        earning: 20,
        pricePublic: 0,
        price6LastMonth: [
            {
                month: "january",
                priceMonth: 15,
            },
            {
                month: "February",
                priceMonth: 15,
            },
            {
                month: "March",
                priceMonth: 14,
            },
            {
                month: "April",
                priceMonth: 15,
            },
            {
                month: "May",
                priceMonth: 16,
            }, 
            {
                month: "June",
                priceMonth: 16,
            }
        ],
        
        soldThisWeek: 15,
        caducityDate: 01/06/2021,
    },
    {
        name: "Yogurth",
        description: "Envase",
        price: 10,
        clasification: "Lacteo",
        earning: 20,
        pricePublic: 0,
        price6LastMonth: [
            {
                month: "january",
                priceMonth: 9,
            },
            {
                month: "February",
                priceMonth: 12,
            },
            {
                month: "March",
                priceMonth: 11,
            },
            {
                month: "April",
                priceMonth: 10,
            },
            {
                month: "May",
                priceMonth: 10,
            }, 
            {
                month: "June",
                priceMonth: 12,
            }
        ],
        
        soldThisWeek: 7,
        caducityDate: 01/05/2021,
    },
    {
        name: "Frijoles",
        description: "Lata",
        price: 13,
        clasification: "perecedero",
        earning: 20,
        pricePublic: 0,
        price6LastMonth: [
            {
                month: "january",
                priceMonth: 9,
            },
            {
                month: "February",
                priceMonth: 11,
            },
            {
                month: "March",
                priceMonth: 10,
            },
            {
                month: "April",
                priceMonth: 10,
            },
            {
                month: "May",
                priceMonth: 13,
            }, 
            {
                month: "June",
                priceMonth: 12,
            }
        ],
        
        soldThisWeek: 2,
        caducityDate: 01/04/2021,
    },
    {
        name: "Arroz",
        description: "Bolsa",
        price: 15,
        clasification: "perecedero",
        earning: 20,
        pricePublic: 0,
        price6LastMonth: [
            {
                month: "january",
                priceMonth: 12,
            },
            {
                month: "February",
                priceMonth: 12,
            },
            {
                month: "March",
                priceMonth: 13,
            },
            {
                month: "April",
                priceMonth: 13,
            },
            {
                month: "May",
                priceMonth: 14,
            }, 
            {
                month: "June",
                priceMonth: 14,
            }
        ],
        
        soldThisWeek: 7,
        caducityDate: 01/04/2021,
    }
]

function Product( name, description, price, clasification, earning, pricePublic, price6LastMonth, soldThisWeek, caducityDate) {
    this.name = name;
    this.description;
    this.price;
    

}


