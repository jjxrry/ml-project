const API_DEVURL = 'http://127.0.0.1:8000'

export const convertImageToASCII = async (file, width, height, charset) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('width', width)
    if (height) formData.append('height', height)
    formData.append('charset', charset)

    console.log('params being passed in the frontend', width, height, charset)
    try {
        const response = await fetch(`${API_DEVURL}/convert_image`, {
            method: "POST",
            body: formData,
        })

        if (!response.ok) {
            const errorData = await response.json()
            console.log(response.json)
            console.log('Error in conversion!', errorData)
        }

        const data = await response.json()
        console.log("succesfull json response", response)

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
