import { useEffect, useState } from "react";

const Addition = () => {
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();

    const [sum, setSum] = useState();

    const [error, setError] = useState();

    useEffect(() => {
        setError("");
        setSum("")
    }, [firstNumber, secondNumber]);

    const handleAddition = (e) => {
        e.preventDefault();

        if (firstNumber && secondNumber) {
            fetch(
                `http://44.201.81.241:8081/add-numbers?firstParam=${firstNumber}&secondParam=${secondNumber}`
            )
                .then((res) => res.json())
                .then((res) => {
                    setSum(res.sum);
                });
        } else {
            setError("Please enter valid numbers");
        }
    };

    return (
        <form className="container my-3" onSubmit={handleAddition}>
            {error ? (
                <div class="alert alert-danger" role="alert">{error}</div>
            ) : (
                ""
            )}
            {sum || sum === 0 ? (
                <div class="alert alert-success" role="alert">
                    sum of {firstNumber} and {secondNumber}  = {sum}
                </div>
            ) : (
                ""
            )}
            <div className="row">
                <div className="col-3">
                    <label for="firstNumber">First Number</label>
                    <input
                        type="number"
                        name="firstNumber"
                        className="form-control"
                        placeholder="First Number"
                        onChange={(e) => setFirstNumber(e.target.value)}
                    />
                </div>
                <div className="col-3">
                    <label for="secondNumber">Second Number</label>
                    <input
                        type="number"
                        name="secondNumber"
                        className="form-control"
                        placeholder="Second Number"
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </div>
                <div className="col-2 d-flex align-items-end">
                    <button type="submit" class="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Addition;
