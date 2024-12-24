export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'post',
            title: 'Post',
            type: 'string',
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'image',
        },
        {
            name: 'qualification',
            title: 'Qualification',
            type: 'array',
            of: [
                {
                    name: 'field',
                    title: 'Field',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title', 
                            type: 'string',
                        },
                        {
                            name: 'text',
                            title: 'Text',
                            type: 'array',
                            of:[{type: 'block'}],
                        }
                    ],
                },
            ]
        },
    ],
}
