export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f9060fbf9f47957f6d0fac',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h9qwjykz',
                  apiId: 'dfb4293f-1ea0-4d45-94ed-c3e95e248933'
                },
                {
                  buildHookId: '61f9060fb0f94197f71506ea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4nvapk39',
                  apiId: '98a3b9b7-37da-4eb3-8899-68cf406c6db4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YanirMidler24/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4nvapk39.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
