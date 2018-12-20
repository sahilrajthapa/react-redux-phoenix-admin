// const host = 'http://localhost:3001'
// const host = 'http://120.79.226.222'
// const devHost = 'http://120.79.226.222'
// const devHost = 'http://localhost:3001'

// const devEnv=(!process.env.NODE_ENV ||process.env.NODE_ENV==='development')?true:false

// export const url =  {
//     question: (devEnv) ? `${devHost}/question` :`${host}/question`, 
//     assignment: (devEnv) ? `${devHost}/assignment` : `${host}/assignment`,
//     doctor: (devEnv) ? `${devHost}/doctor` :`${host}/doctor`,    
//     user: (devEnv) ? `${devHost}/userlist`:`${host}/userlist`,
//     mtechAuth: (devEnv) ? `${devHost}/mtech/auth`: `${host}/mtech/auth`
// }

const host = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:3001' : 'http://120.79.226.222'

var api = {
    question: '/question',
    assignment: '/assignment',
    doctor: '/doctor',
    user: '/userlist',
    mtechAuth: '/mtech/auth'
} 
  
for (var key in api) {
    api[key] = host + api[key]
}
  
export const url = api
  