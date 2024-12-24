export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                { 
                    type : 'reference',
                    weak: true,
                    to: [{ type: 'clubs' }] 
                }
            ]
        }
    ],
}