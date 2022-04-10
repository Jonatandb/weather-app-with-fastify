const forecast = {
  type: 'object',
  properties: {
    cod: {
      type: 'number',
    },
    message: {
      type: 'number',
    },
    cnt: {
      type: 'number',
    },
    city: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
        coord: {
          type: 'object',
          properties: {
            lat: {
              type: 'number',
            },
            lon: {
              type: 'number',
            },
          },
        },
        country: {
          type: 'string',
        },
        population: {
          type: 'number',
        },
        timezone: {
          type: 'number',
        },
        sunrise: {
          type: 'number',
        },
        sunset: {
          type: 'number',
        },
      },
    },
    list: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          dt: {
            type: 'number',
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
              sea_level: {
                type: 'number',
              },
              grnd_level: {
                type: 'number',
              },
              temp_kf: {
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
          wind: {
            type: 'object',
            properties: {
              speed: {
                type: 'number',
              },
              deg: {
                type: 'number',
              },
              gust: {
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
          visibility: {
            type: 'number',
          },
          pop: {
            type: 'number',
          },
          sys: {
            type: 'object',
            properties: {
              pod: {
                type: 'string',
              },
            },
          },
          dt_txt: {
            type: 'string',
          },
        },
      },
    },
  },
}

const forecastSchema = {
  tags: ['WeatherApp-Fastify API'],
  summary: 'Get forecast by city',
  params: {
    city: {
      type: 'string',
    },
  },
  response: {
    200: forecast,
  },
}

module.exports = { forecastSchema }
