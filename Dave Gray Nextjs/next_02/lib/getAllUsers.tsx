
export default async function getAllUsers() {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok){
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}
