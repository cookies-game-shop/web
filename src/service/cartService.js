import axios from "axios";
import QueryString from "query-string";

class cartService{
    addToCart(username, game_id) {
    axios
            .post(
                `http://localhost:8080/user/add-to-card?username=${username}&game_id=${game_id}`,
                QueryString.stringify({
                    username: username,
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

    deleteFromCart(username, game_id) {

        axios
            .delete(
                `http://localhost:8080/user/delete-card?username=${username}&game_id=${game_id}`,
                {
                    headers: {

                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,

                    },

                    data: JSON.stringify({
                        username: username,
                        game_id: game_id,
                    }),


                }
            )
            .then(function (res) {
                console.log(res.data);
            });
    }

}

export default new cartService();
