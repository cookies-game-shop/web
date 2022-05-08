import axios from "axios";

class GameService {
    async addGame(name, desc, price, image) {
        const formData = new FormData()
        formData.append('file',image);
       await  axios.post('http://localhost:8080/game/save-game',
            {
                name: name,
                par: desc,
                price: price,
                file: formData,
            }, {
                // headers: {
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${localStorage.getItem('token')}`
                // }
            }).then(function (res) {
            console.log(res.data)
        });
    }
}

export default new GameService();
