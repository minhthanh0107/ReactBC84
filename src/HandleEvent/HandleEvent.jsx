import React from "react";

const HandleEvent = () => {
    const HandleClick = (e) => {
        e.target.className = "btn btn-dark";
        console.log(123);
    };

    const sayHello = (name) => {
        console.log(`Hello ${name}`);
    }
    return (
        <div className="container">
            <h3>HandleEvent</h3>
            <button
                className="btn btn-success"
                onClick={(e) => {
                    e.target.className = "btn btn-dark";
                    console.log(123);
                    // Gọi hàm khác thực thi
                    sayHello('Thành');
                }}
            >
                Click me !
            </button>

            <button className="btn btn-primary" onClick={HandleClick}>
                Click dạng callback
            </button>
                
            <button className="btn btn-danger" onClick={HandleClick}>
                Click dạng callback
            </button>
        </div>
    );
};

export default HandleEvent;
