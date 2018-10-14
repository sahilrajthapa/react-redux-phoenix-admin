const host = 'http://localhost:3001'
const devHost = 'http://120.79.226.222'
// const devHost = 'http://localhost:3001'

export const url =  {
    question: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `${devHost}/question` :`${host}/question`, 
    assignment: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `${devHost}/assignment` : `${host}/assignment`,
    doctor: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? `${devHost}/doctor` :`${host}/assignment`,    
}