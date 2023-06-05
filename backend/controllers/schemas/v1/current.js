const current = {
  type: 'object',
  properties: {
    coord: {
      type: 'object',
      properties: {
        lon: {
          type: 'number',
        },
        lat: {
          type: 'number',
        },
      },
    },
    weather: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
          },
          main: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          icon: {
            type: 'string',
          },
        },
      },
    },
    base: {
      type: 'string',
    },
    main: {
      type: 'object',
      properties: {
        temp: {
          type: 'number',
        },
        feels_like: {
          type: 'number',
        },
        temp_min: {
          type: 'number',
        },
        temp_max: {
          type: 'number',
        },
        pressure: {
          type: 'number',
        },
        humidity: {
          type: 'number',
        },
      },
    },
    visibility: {
      type: 'number',
    },
    wind: {
      type: 'object',
      properties: {
        speed: {
          type: 'number',
        },
        deg: {
          type: 'number',
        },
      },
    },
    clouds: {
      type: 'object',
      properties: {
        all: {
          type: 'number',
        },
      },
    },
    dt: {
      type: 'number',
    },
    sys: {
      type: 'object',
      properties: {
        type: {
          type: 'number',
        },
        id: {
          type: 'number',
        },
        country: {
          type: 'string',
        },
        sunrise: {
          type: 'number',
        },
        sunset: {
          type: 'number',
        },
      },
    },
    timezone: {
      type: 'number',
    },
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    cod: {
      type: 'number',
    },
  },
}

const currentSchema = {
  tags: ['WeatherApp-Fastify API'],
  summary: 'Get weather by city',
  params: {
    city: { type: 'string' },
  },
  response: {
    200: current,
  },
}

module.exports = { currentSchema }
