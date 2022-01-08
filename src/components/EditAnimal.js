import axios from "axios"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

const EditAnimal =  ({apiUtils}) => {
    const [animal, setAnimal] = useState({ race: "", age: "" });


    const id = parseInt(useParams().id)
    const URL = apiUtils.getUrl()


useEffect(() => {
    const getAnimalById = async () => {
        const response = await axios.get(URL + '/animal/id/' + id)
        setAnimal(response.data)
    }
    getAnimalById()
}, [URL, animal]);


const handleInput = (event) => {
    setAnimal({ ...animal, [event.target.id]: event.target.value })
}


const editAnimal = async () => {
    try {
        await axios.put(URL + '/' + id, {
            race: animal.race,
            age: animal.age
        })
    } catch (error) {
    }
}


<div className="centerAligned">
<h1>Edit Animal</h1>
<form onChange={handleInput} className="form-group">
    <p className="statusMsg">You are editing the animal with ID: {id}</p>
    <input className="form-control addInput" id="race" defaultValue={animal.race} placeholder="Enter year" type="text"></input>
    <input className="form-control addInput" id="age" defaultValue={animal.age} placeholder="Enter title" type="text"></input>
</form>
<button onClick={editAnimal} className="btn btn-primary addButton">Edit Animal</button>
</div >

}

export default EditAnimal