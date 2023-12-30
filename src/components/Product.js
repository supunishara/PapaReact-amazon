"use client";

import Image from "../../node_modules/next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((_, index) => (
            <StarIcon key={id} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <NumericFormat
          value={price.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="https://assets.aboutamazon.com/4f/c5/88477c6a4026ada27cd8af86c1e8/prime-0.png"
            height={200}
            width={200}
            objectFit="contain"
            className="w-12"
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
