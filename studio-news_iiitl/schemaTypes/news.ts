export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'image',
        },
    ],
}