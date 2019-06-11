const URL_USERNAME =  'https://torre.bio/api/bios/$username'
const URL_DEEGREES =  "https://torre.bio/api/people/$username/connections?limit=$limit"
const URL_SEARCH =  "https://torre.bio/api/people?q=paplo&limit=10"

export default function getRecom (payload) {
    const username = 'torrenegra'
    const limit = '10'
    const query = 'juan'

    let url = URL_DEEGREES.replace('$username',username)
    url = url.replace('$limit', limit)
    return fetch(url)
        .then(res => {
            console.log(res.json)
            return res.json()
        })

}