export default {
    name: 'department',
    title: 'Department',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'peoples',
            title: 'Peoples',
            type: 'array',
            of: [
                {
                    name: 'members',
                    title: 'Members',
                    type: 'object',
                    fields: [
                        {
                            name: 'subDepartment',
                            title: 'Sub Department', 
                            type: 'string',
                        },
                        {
                            name: 'person',
                            title: 'Person',
                            type: 'array',
                            of: [
                                {type: 'person'}
                            ],
                        }
                    ],
                },
            ],
        },
    ],
}