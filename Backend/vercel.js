// {
//   "installCommand": "npm install --legacy-peer-deps",
//   "version": 2,
//   "builds": [
//     {
//       "src": "ourBackend/server.js",
//       "use": "@vercel/node"
//     },
//     {
//       "src": "client/build/**/*",
//       "use": "@vercel/static"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/api/(.*)",
//       "dest": "/ourBackend/server.js"
//     },
//     {
//       "src": "/(.*)",
//       "dest": "/client/build/index.html"
//     }
//   ]
// }
