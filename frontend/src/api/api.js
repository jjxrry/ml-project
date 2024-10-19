const API_DEVURL = 'http://127.0.0.1:8000'

export const convertImageToASCII = async (file, width, height, charset) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('width', width)
    if (height) formData.append('height', height)
    formData.append('charset', charset)

    // charset not being passed correctly, encode fix
    let url = `${API_DEVURL}/convert_image?width=${width}&charset=${encodeURIComponent(charset)}`;
    if (height) {
        url += `&height=${height}`;
    }

    console.log("making request to: ", url)
    console.log('params being passed in the frontend', width, height, charset)
    try {
        // if we want to have the baseurl, we can just pass in the endpoint params as Form()
        // const response = await fetch(`${API_DEVURL}/convert_image`, {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.log(response.json)
            console.log('Error in conversion!', errorData)
        }

        const data = await response.json()
        console.log("succesful json response", data)

        if (!data.ascii_art) {
            console.log('no ascii_art field')
        }

        const art = data.ascii_art
        // console.log(art)

        return art
    } catch (e) {
        console.log("Error in conversion fetch", e)
        alert("Error in conversion fetch")
    }
}
