import { useEffect, useState } from "react";
import "../assets/css/contact_message.css";

const ContactMessage = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [msgSendSuccess, setMsgSendSuccess] = useState(false);
  let id = 0;
  const sendToDB = () => {
    console.log("sending name and msg...");

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("msg", msg);

    clearTimeout(id);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://chaitanya360.pythonanywhere.com/api/portfolio_form/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.ok) setMsgSendSuccess(true);
        id = setTimeout(() => setMsgSendSuccess(false), 4000);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <h2 className="contact_msg_title">Leave a Message</h2>
      <div className="contact_form_input_container">
        <form>
          <label>
            <input
              className="contact_form_input"
              placeholder="Name"
              type="text"
              onChange={(value) => setName(value.target.value)}
              value={name}
              autoComplete="false"
              required
            />
          </label>
          <textarea
            className="contact_form_input"
            placeholder="Message"
            type="text"
            style={{ minHeight: "100px" }}
            onChange={(value) => setMsg(value.target.value)}
            value={msg}
            required
          />
          <button
            className="contact_form_btn"
            onMouseDown={() => sendToDB()}
            type="button"
          >
            Send
          </button>
          {msgSendSuccess && (
            <div
              style={{
                fontFamily: "sans-serif",
                marginTop: "2vh",
                color: "rgba(25,255,25,0.7)",
              }}
            >
              Thank You for your feedback{" "}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMessage;
