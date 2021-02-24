import "../assets/css/contact_message.css";

const ContactMessage = () => {
  return (
    <div>
      <h2
        style={{
          fontFamily:
            "Lucida Sans Unicode , Lucida Grande, Lucida Sans, Arial, sans-serif",
          fontSize: "2vw",
          color: "#c4c4c4",
          fontWeight: "100",
          margin: 0,
          marginBottom: "10px",
        }}
      >
        Leave a Message
      </h2>
      <div className="contact_form_input_container">
        <form>
          <input
            className="contact_form_input"
            placeholder="Name"
            type="text"
          />
          <textarea
            className="contact_form_input"
            placeholder="Message"
            type="text"
            style={{ minHeight: "100px" }}
          />
          <button className="contact_form_btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMessage;
