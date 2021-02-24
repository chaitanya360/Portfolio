import { ReactComponent as Svg } from "../assets/svgs/contact_svg.svg";
import { ReactComponent as Facebook_svg } from "../assets/svgs/facebook_svg.svg";
import { ReactComponent as Linkedin_svg } from "../assets/svgs/linkedin_svg.svg";
import { ReactComponent as Whatsapp_svg } from "../assets/svgs/whatsapp_svg.svg";
import ContactMessage from "../components/ContactMessage";
import IconCard from "../components/IconCard";

const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h1 className="header">Contact</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="contact_page_left_container">
          <div className="icon_card_container">
            <IconCard
              title="Facebook"
              Svg={Facebook_svg}
              contact_info="/chaitanya jadhav"
            />

            <IconCard
              title="Linkedin"
              Svg={Linkedin_svg}
              contact_info="/chaitanya360"
            />

            <IconCard
              title="Whatsapp"
              Svg={Whatsapp_svg}
              contact_info="+91 7378432946"
            />
          </div>

          <div className="message_container" style={{ marginTop: "10vw" }}>
            <ContactMessage />
          </div>
        </div>

        <Svg
          className="project_boy_svg"
          style={{ marginRight: "5vw", height: "50%", width: "40%" }}
        />
      </div>
    </div>
  );
};

export default Contact;
