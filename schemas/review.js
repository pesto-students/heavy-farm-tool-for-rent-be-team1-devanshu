export default{
    name:'review',
    title:'Review',
    type: 'object',
    fields:[
        {
            name:'reveiwDescription',
            title: 'Review Description',
            type: 'string',
        },
        {
            name: 'user',
            title:'User',
            type:'user',
        },
        {
            name:'host',
            title:'Host',
            type:'host',
        },
        {
            name:'rating',
            title:'Rating',
            type:'string',
            options:[
                {title:'5 stars',value:'5-Star'},
                {title:'4 stars',value:'4-Star'},
                {title:'3 stars',value:'3-Star'},
                {title:'2 stars',value:'2-Star'},
                {title:'1 stars',value:'1-Star'},
            ],
            layout: 'radio',
        },
    ]
}