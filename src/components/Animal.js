import axios from "axios";
import { useState, useEffect } from "react"
import apiUtils from "../utils/apiUtils";

const Animal = () => {
    const URL = apiUtils.getUrl()
    const [animals, setAnimals] = useState([]);
    const [animal, setAnimal] = useState({ race: "", age: "" });


    const handleInput = (event) => {
        setAnimal({ ...animal, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        const getAnimals = async () => {
            const response = await apiUtils.getAuthAxios().get(URL + '/animal/all')
            setAnimals(response.data.animals)
        }
        getAnimals()
    }, [URL, animals]);


    const deletedata = async (event) => {
        const animalId = event.target.id
        await axios.delete(URL + '/animal/' + animalId)
    }

    const createAnimal = async () => {
        await axios.post(URL + '/animal/create', animal)

    }


    return (
        <div>
            <h1>Here you can see the animals</h1>

            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Animals</th>
                        <th>Age</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) => (<tr key={animal.id}><td>{animal.id}</td><td>{animal.race}</td><td>{animal.age}</td><td><button className="btn btn-danger" id={animal.id} onClick={deletedata}>Delete</button></td></tr>))}
                </tbody>
            </table>

            <div className="center">
                <form onChange={handleInput}>
                    <input placeholder="race" id="race" />
                    <input placeholder="age" id="age" />
                </form>
                <button className="btn btn-success" onClick={createAnimal}>Create animal</button>
            </div>
        </div>
    )
}

export default Animal