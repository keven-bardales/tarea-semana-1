import axios from 'axios';

async function getUserInfo(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error(`Error al obtener información del usuario ${username}: ${error.message}`);
  }
}

getUserInfo('keven-bardales')

