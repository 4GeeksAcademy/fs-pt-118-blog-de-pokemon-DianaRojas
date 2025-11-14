const userServices = {}
const url = 'https://pokeapi.co/api/v2'


userServices.getPokemons = async () => {
    try {
        const resp = await fetch(url + '/pokemon')
        if (!resp.ok) throw new Error('error fetching pokemons')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


userServices.getItems = async () => {
    try {
        const resp = await fetch(url + '/item')
        if (!resp.ok) throw new Error('error fetching items')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


userServices.getPokemon = async (name) => {
    try {
        const resp = await fetch(url + `/pokemon/${name}`)
        if (!resp.ok) throw new Error('error fetching image pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

userServices.getItem = async (name) => {
    try {
        const resp = await fetch(url + `/item/${name}`)
        if (!resp.ok) throw new Error('error fetching image item')
        const data = await resp.json()
        // console.log('items',data)
        return data
    } catch (error) {
        console.log(error)
    }
}


userServices.getDescriptionPokemon = async (name) => {
    try {
        const resp = await fetch(url + `/pokemon-species/${name}`)
        if (!resp.ok) throw new Error('error fetching description pokemon')
        const data = await resp.json()
        const description = data.flavor_text_entries.find((e) => e.language.name === "es")
        const rate = data.gender_rate
        const category = data.genera.find(e => e.language.name === "es");

        let sex = ""

        const female = (rate / 8) * 100;
        const male = 100 - female;

        if (rate === -1) {
            sex = "SN";
        } else if (rate === 0) {
            sex = "M";
        } else if (rate === 8) {
            sex = "F"
        } else {
            sex = "FM"
        }


        return {
            "description": description.flavor_text.replace(/\n|\f/g, " "),
            "sex": sex,
            "category": category ? category.genus : "Categoria no encontrada"
        }
    } catch (error) {
        console.log(error)
    }

}


userServices.getAbilitiesES = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('error fetching abilities')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


userServices.getTypesES = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('error fetching types')
        const data = await resp.json()
        const esName = data.names.find(e => e.language.name === "es")
        return esName ? esName.name : type.type.name
    } catch (error) {
        console.log(error)
    }
}


userServices.getStatsES = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('error fetching stats')
        const data = await resp.json()
        const esName = data.names.find(e => e.language.name === "es")
        return esName ? esName.name : type.type.name
    } catch (error) {
        console.log(error)
    }
}

userServices.getMoveES = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('error fetching types')
        const data = await resp.json()
        const esName = data.names.find(e => e.language.name === "es")
        const categoryName = data.damage_class.name
        return {
            name: esName ? esName.name : data.name,
            category: categoryName
        }
  } catch (error) {
        console.log(error)
    }
}

userServices.getDataUrl = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('error fetching data')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}



export default userServices