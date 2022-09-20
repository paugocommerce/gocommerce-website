const baseUrl = process.env.NODE_ENV === "production" 
? 'https://0.0.0.0:3000' 
: 'http://localhost:3000';

export default baseUrl;