import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/chat.js'
import { parse } from 'url'

async function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })

    req.on('error', reject)
  })
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [react()],
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const { pathname } = parse(req.url || '', true)
        if (pathname === '/api/chat' && req.method === 'POST') {
          try {
            req.body = await parseJsonBody(req)
            res.status = (status) => {
              res.statusCode = status
              return res
            }
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
              return res
            }
            await chatHandler(req, res)
          } catch (error) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Server local API gagal dijalankan.' }))
          }
          return
        }
        next()
      })
    },
  }
})
