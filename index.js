const request = require('request')

async function query(API) {
    return new Promise((resolve, rejected) => {
        request(API, async function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
        let data  = JSON.parse(body)
        resolve(data)
        });
    }); 
}

async function main() {

    const API_USERNAME =  'https://torre.bio/api/bios/$username'
    const API_DEGREE =  "https://torre.bio/api/people/$username/connections"
    const API_SEARCH =  "https://torre.bio/api/people?q=paplo&limit=10"

    const username = 'davadvadad'
    const queryAPI = ''
    const limit = '10'

    let url = API_DEGREE.replace('$username',`${username}`)
    // url = url.replace('$query',`${queryAPI}`);
    // url = url.replace('$limit',`${limit}`);

    const data = await query(url)
    const publicId = data[1].person.publicId
    // console.log(data[1].person)
    // console.log(data[1].degrees)
    // console.log(data[1].person.publicId)

    url = API_USERNAME.replace('$username',`${publicId}`)

    // console.log(`la api username es ${url}`)

    const dataUser = await query(url)
    console.log(dataUser.strengths)

    search = ['Fronted', 'Communication']
    let matchs = []
    for(let i = 0; i < search.length; i++ ) {
        for(let j = 0; j < dataUser.strengths.length; j++) {
            console.log(dataUser.strengths[j].name)
            if(search[i] == dataUser.strengths[j].name) {
                matchs.push(search[i])
            }
        }
    }
    console.log(matchs)
}

main();