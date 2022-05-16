import axios from "axios";
import QueryString from "query-string";

class cartService{
    addToCart( game_id) {
    axios
            .post(
                `http://localhost:8080/user/add-to-card?game_id=${game_id}`,
                QueryString.stringify({
                    game_id: game_id,
                }),
                {
                    headers: {

                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,

                    },
                }
            )
            .then(function (res) {
                console.log(res.data);
            });
    }

    async deleteFromCart(game_id) {

        axios
            .delete(
                `http://localhost:8080/user/delete-card?game_id=${game_id}`,
                {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,

                    },


                    data: JSON.stringify({
                        game_id: game_id,
                    })
                }





            )
            .then(function (res) {
                console.log(res.data);
            });
    }

}

export default new cartService();
