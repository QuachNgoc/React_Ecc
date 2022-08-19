export default {
    name: 'mentor',
    title: 'Mentor',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Id',
        type: 'number'
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ]
}