// const host = 'http://localhost:3001'
const host = 'http://120.79.226.222'
// const devHost = 'http://120.79.226.222'
const devHost = 'http://localhost:3001'

const devEnv=(!process.env.NODE_ENV ||process.env.NODE_ENV==='development')?true:false

export const url =  {
    question: (devEnv) ? `${devHost}/question` :`${host}/question`, 
    assignment: (devEnv) ? `${devHost}/assignment` : `${host}/assignment`,
    doctor: (devEnv) ? `${devHost}/doctor` :`${host}/assignment`,    
    user: (devEnv) ? `${devHost}/userlist`:`${host}/userlist`
}