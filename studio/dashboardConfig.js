export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6350e8a22c9a347141c7eca8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-btw2wb16',
                  apiId: 'e0492154-848e-4c4f-8043-d13bcfde2330'
                },
                {
                  buildHookId: '6350e8a25086de769009eda9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w2yvhfrk',
                  apiId: 'da86a535-4d3e-442c-99a9-cfae368df9ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Stalis1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w2yvhfrk.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
