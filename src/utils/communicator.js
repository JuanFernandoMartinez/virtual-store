
let unsignedGetFetch =  async (url)=>{
    let response = await fetch(url)
    let res = await response.json()
    return res;
}

let unsignedPostFetch = async (url, data)=>{
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application-json",

        },
        body: JSON.stringify(data)

    }

    let response = await fetch(url,config);
    let res = await response.json()


    return res
}