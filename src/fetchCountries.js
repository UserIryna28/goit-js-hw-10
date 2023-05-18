const BASE_URL = 'https://restcountries.com/v3.1/name/'
const fields = 'fields=name,capital,population,flags,languages"'

export function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?${fields}`)
        // .then(response => {
        //     console.log(response)
        //     if (!response.ok) {
        //         throw new Error(response.statusText )          }
    .then(response => response.json())
    .catch(error => console.error(error))
        }
        
//         .then(response => {
//             console.log(response)
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json()
//         })
//    .then(data => console.log(data))
//  .catch(error => console.error(error))   


    
      

 
// .finally(() => console.log("finally"))