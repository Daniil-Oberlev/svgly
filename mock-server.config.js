/** @type {import('mock-config-server').FlatMockServerConfig} */
const flatMockServerConfig = [
  {
    baseUrl: '/api/v1'
  },
  {
    configs: [
      {
        path: '/svg',
        method: 'get',
        routes: [
          {
            data: '<path d="m14 11 4-4 4 4" /><path d="M18 16V7" /><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M3.304 13h6.392" />'
          }
        ]
      },
      {
        path: '/list',
        method: 'get',
        routes: [
          {
            data: [
              {
                'a-arrow-down':
                  '<path d="m14 12 4 4 4-4" /><path d="M18 16V7" /><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M3.304 13h6.392" />'
              },
              {
                'a-arrow-up':
                  '<path d="m14 11 4-4 4 4" /><path d="M18 16V7" /><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M3.304 13h6.392" />'
              },
              {
                accessibility:
                  '<circle cx="16" cy="4" r="1" /><path d="m18 19 1-7-6 1" /><path d="m5 8 3-3 5.5 3-2.36 3.5" /><path d="M4.24 14.5a5 5 0 0 0 6.88 6" /><path d="M13.76 17.5a5 5 0 0 0-6.88-6" />'
              }
            ]
          }
        ]
      }
    ]
  }
]

export default flatMockServerConfig
