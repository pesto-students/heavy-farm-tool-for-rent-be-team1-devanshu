export default {
    name:'product',
    title:'Product',
    type: 'document',
    fields:[
        {
            name:'title',
            title: "Title",
            type:'string'
        },
        {
            name:'location',
            title: "Location",
            type:'geopoint'
        },
        {
            name:'description',
            title: "Description",
            type:'string'
        },
        {
            name:'ProductType',
            title: "Product Type",
            type: 'string',
            options: {
                list:[
                    {
                        title: 'Tilter',value:'tilter'
                    },
                    {
                        title: 'Plougher', value:'plougher'
                    },
                    {
                        title: 'Irrigator', value:'irrigator'
                    },
                    {
                        title: 'Harvester', value:'harvester'
                    }
                ],
                layout: 'radio'
            }
        },
        {
            name:'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot:true,
            },
        },
        {
            name:'images',
            title: 'Images',
            type: 'array',
            of: [{type:'productImage'}]
        },
        {
            name:'pricePerDay',
            title: 'Price Per Day',
            type: 'number',
        },
        {
            name: 'engine',
            title: 'Engine',
            type: 'string'
        },
        {
            name:'fuelCapacity',
            title: 'FuelCapacity',
            type: 'number'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source: 'title',
                maxLength:100,
            },
        },
        {
            name:'id',
            title: 'ID',
            type:'number'
        },
        {
            name:'reviews',
            title:'Reviews',
            type:'array',
            of:[
                {
                    type:'review',
                }
            ]
        }
    ]
}