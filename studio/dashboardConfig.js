export default {
  widgets: [
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
                  buildHookId: '61321cb122f9e22f2d3acc8e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8pfobf7j',
                  apiId: 'cdd90c51-1dc9-42d5-af6c-36ab6152b149'
                },
                {
                  buildHookId: '61321cb1dbacc752e9b3696a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fvp6cne5',
                  apiId: '738f3230-c169-4b9b-94b4-5b25c367921b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pete0087/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fvp6cne5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
