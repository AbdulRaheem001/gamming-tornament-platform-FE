import React, { useState } from "react";
//import "./Styles/AddGame.css";
import { toast } from "react-toastify";
import axios from "axios";
function AdminAddGame() {
  const [imageFile, setimageFile] = useState();
  const [gameData, setgameData] = useState({
    Game_name: "",
    Game_Platform: "",
    Game_fee: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setgameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input
    setimageFile(file); // Save the selected image to state
    setgameData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Game_name", gameData.Game_name);
    formData.append("Game_Platform", gameData.Game_Platform);
    formData.append("Game_fee", gameData.Game_fee);
    formData.append("image", imageFile);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log("formData:", formDataObject); // Log the formData object

    console.log("gameData:", gameData); // Log the gameData object

    try {
      const response = await axios.post(
        "http://localhost:8000/game/addGame",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("done");
      toast("Game Add");
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <h1>Welcom to Add Game</h1>
      <div className="Main-Con">
        <center>
          <h2>Add Game</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label>Game Name:</label>
              <input
                type="text"
                name="Game_name"
                value={gameData.Game_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Game Platform:</label>
              <select
                name="Game_Platform" // Update the name attribute to match the state key
                value={gameData.Game_Platform}
                onChange={handleChange}
                required
              >
                <option value="">Select a Platform</option>
                <option value="PC">PC</option>
                <option value="Mobile">Mobile</option>
                <option value="Play-Station">Play-Station</option>
                <option value="X-Box">X-Box</option>
              </select>
            </div>
            <div>
              <label>Game Fee:</label>
              <input
                type="text"
                name="Game_fee"
                value={gameData.Game_fee}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Game image:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </div>
            <button type="submit">Add Game</button>
          </form>
        </center>
      </div>
    </>
  );
}

export default AdminAddGame;
