import React, { useState } from "react";

const DemoChangeColor = () => {
    let [imgSrc, setImgSrc] = useState(
        "https://dummyimage.com/600x400/000/fff&text=state-default"
    );

    const changeColor = (color) => {
        let imgNew = `img/products/${color}-car.jpg`;
        setImgSrc(imgNew);
    };

    return (
        <div className="container">
            <h3>Change color car</h3>
            <div className="d-flex">
                <div className="car w-50">
                    <img className="w-100" src={imgSrc} alt="car" />
                </div>
                <div className="w-50">
                    <button
                        className="mx-2 btn btn-danger"
                        onClick={() => {
                            changeColor("red");
                        }}
                    >
                        Red color
                    </button>
                    <button
                        className="mx-2 btn btn-dark"
                        onClick={() => changeColor("black")}
                    >
                        Black color
                    </button>
                    <button
                        className="mx-2 btn btn-secondary"
                        onClick={() => changeColor("silver")}
                    >
                        Silver color
                    </button>
                    <button
                        className="mx-2 btn btn-primary"
                        onClick={() => changeColor("steel")}
                    >
                        Steel color
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoChangeColor;
