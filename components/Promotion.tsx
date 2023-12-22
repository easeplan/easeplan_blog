export function Promotion({ imageUrl, link, title, description, cta }: any) {
  return (
    <div className="promo-container my-8 p-4 rounded-lg text-center bg-purple-700 text-white">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="mx-auto" />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
        <button className="mt-4 bg-white text-purple-700 py-2 px-4 rounded">
          {cta}
        </button>
      </a>
    </div>
  );
}
