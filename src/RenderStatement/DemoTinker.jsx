import React, {useState}  from "react";

const DemoTinker = () => {
    let [numRandom, setNumRandom] = useState(20);

    const changeAvatar = () => {
        // Tạo ra 1 số random
        const getRandomId = () => Math.floor(Math.random() * 70);
        setNumRandom(getRandomId);
    }

    return (
    <div className=" mt-5" style={{ maxWidth: "300px" }}>
      <div className="card text-center">
        <div className="card-header bg-danger text-white">Tinker App</div>
        <img
          src={`https://i.pravatar.cc/300?u=${numRandom}`}
          className="card-img-top"
          alt="avatar"
        />
        <div className="card-body">
          <h5 className="card-title">Bob</h5>
          <p className="card-text">Love hiking and outdoors</p>
          <p>Age: 19</p>
          <button className="btn btn-secondary me-2" onClick={changeAvatar}>
            Dislike
          </button>
          <button className="btn btn-danger" onClick={changeAvatar}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoTinker;







