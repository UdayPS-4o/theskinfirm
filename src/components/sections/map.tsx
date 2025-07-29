
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
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCGQAWK1UJQLYRomOxa91CvX9RRyOagukY&q=The+Skin+Firm+Laser+Skin+%26+Hair+Clinic+NIBM+Kondhwa,Pune"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of The Skin Firm NIBM, Kondhwa Clinic"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map; 