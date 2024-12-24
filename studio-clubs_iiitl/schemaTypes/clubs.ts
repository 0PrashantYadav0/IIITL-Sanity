export default {
    name: 'clubs',
    title: 'Clubs',
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
                    name: "cordinator",
                    title: "Cordinator",
                    type: "object",
                    fields: [
                        {
                            name: 'coordinatorName',
                            title: 'Cordinator Name',
                            type: 'string',
                        },
                        { 
                            name: 'coordinatorPic',
                            title: 'Cordinator Pic',
                            type: 'image',
                        }
                    ]
                },
                {
                    name: "member",
                    title: "Member",
                    type: "object",
                    fields: [
                        {
                            name: 'memberName',
                            title: 'Member Name',
                            type: 'string',
                        },
                        { 
                            name: 'memberPic',
                            title: 'Member Pic',
                            type: 'image',
                        },
                    ],
                },
            ]
        },
        {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [
                { 
                    type : 'reference',
                    weak: true,
                    to: [{ type: 'events' }] 
                }
            ]
        }
    ],
}