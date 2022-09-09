export default{
    name:'productImage',
    title: 'Product Image',
    type: 'image',
    fields: [
        {
            name:'caption',
            title: 'Caption',
            type: 'string',
            options:{
                isHighLight:true
            }
        },
    ],
    options:{
        hotspot:true,
    }
}