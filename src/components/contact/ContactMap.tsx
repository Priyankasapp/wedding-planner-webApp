interface ContactMapProps {
  title?: string;
  src?: string;
}

const ContactMap = ({
  title = "Studio location",
  src = "https://www.openstreetmap.org/export/embed.html?bbox=2.358%2C48.853%2C2.368%2C48.860&layer=mapnik&marker=48.8566%2C2.3522",
}: ContactMapProps) => {
  return (
    <section className="bg-[var(--ivory)] pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="overflow-hidden rounded-sm border border-[var(--foreground)]/10 aspect-[21/9]">
          <iframe
            title={title}
            src={src}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[40%] sepia-[10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;