import GameService from "../service/gameService";
import {useState} from "react";

export default function AddGame() {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await GameService.addGame(name, desc, price, image);
    }
    return (
        <>
            <form encType="multipart/form-data" >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={e => {
                               setName(e.target.value)
                           }}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={e => {
                               setDesc(e.target.value)
                           }}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={e => {
                               setPrice(e.target.value)
                           }}/>
                </div>
                <input type={"file"} onChange={e => {
                    setImage(e.target.value)
                }}/>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}