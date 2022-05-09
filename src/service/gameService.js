import axios from "axios";

class GameService {
  async addGame(name, desc, price, image) {
    var formData = new FormData();
    formData.append("file", image);

    await axios
      .post(
        `http://localhost:8080/game/save-game?name=${name}&par=${desc} infarct&price=${price}&category_id=2`,
        {
          file: image,
        },
        {
          headers: {
            "Content-Type": "/multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (res) {
        console.log(res.data);
      });
  }

}

export default new GameService();
