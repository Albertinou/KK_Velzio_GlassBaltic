import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Tvarkaraštis',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'komanda',
      title: 'Namų Komanda',
      type: 'reference',
      to: {type: 'komanda'},
    }),
    defineField({
      name: 'komanda2',
      title: 'Svečių Komanda',
      type: 'reference',
      to: {type: 'komanda'},
    }),
    defineField({
      name: 'result',
      title: 'Rezultatas',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Varžybų vieta',
      type: 'string',
    }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Varžybų laikas',
      type: 'datetime',
    }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'komanda.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {komanda} = selection
      return {...selection, subtitle: komanda && `by ${komanda}`}
    },
  },
})
