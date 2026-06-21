const RecommendationCard = ({
  title,
  items,
}) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-3">

        {items.map((item, index) => (
          <li
            key={index}
            className="border-b pb-2"
          >
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
};

export default RecommendationCard;