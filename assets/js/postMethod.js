async function postMethod(data, lastUrl){
    const url = 'https://bd-pie5-unifagoc.herokuapp.com/api/v1/' + lastUrl
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Accept':'/',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}
