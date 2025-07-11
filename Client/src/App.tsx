import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./App.css";
import { useState } from "react";

type Inputs = {
  User_Input: string;
};

type Result = {
  emotion: string;
  confidence: string;
};

function App() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    setResult(null);
    axios
      .post("http://127.0.0.1:8000/", data)
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container">
         <h1 className="heading">Emotion Analyzer</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea {...register("User_Input", { required: true })} />
          {errors.User_Input &&
            "Please enter your reflection before submitting !"}
          <br />
          <input type="submit" />
        </form>

         {loading && <div className="loader"></div>}

        {result && !loading && (
          <div className="analysis_r">
            <h3>Emotion : {result.emotion}</h3>
            <h3>Confidence : {result.confidence}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
