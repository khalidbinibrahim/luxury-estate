import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury | Contact</title>
            </Helmet>
            <div className="mb-24">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl mb-4">Contact</h2>
                <p className="font-poppins font-normal text-[#878787] text-center">Real estate is defined as the land and any permanent structures, like a home, or <br /> improvements attached to the land, whether natural or man-made.</p>
            </div>
        </div>
    );
};

export default Contact;