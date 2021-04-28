import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Teste(props) {
  const { mensagem } = props;

  const notify = () => toast(mensagem || "");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Teste;
