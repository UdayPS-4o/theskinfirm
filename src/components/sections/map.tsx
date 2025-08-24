
import React from "react";

const Map = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Location
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Come visit us at our clinic in Pune.
          </p> */}
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.999837265882!2d73.90586031023531!3d18.4775981825121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb03805470a7%3A0x2f95a1cd42b5ce00!2sThe%20Skin%20Firm%20%7C%20Laser%20Skin%20%26%20Hair%20Clinic%20NIBM%20Mohammed%20Wadi!5e0!3m2!1sen!2sin!4v1719262580795!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of The Skin Firm NIBM, Mohammed Wadi Clinic"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map; 