export default {
    name: 'admissions',
    title: 'Admissions',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'course',
            title: 'Course',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'courses'
                        }
                    ]
                }
            ]
        }
    ]
}