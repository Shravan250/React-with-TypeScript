import React, { useEffect, useState } from "react";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Meta {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

const FetchData = () => {
  const [data, setData] = useState<ProductProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const fetcheddata = await response.json();
        setData(fetcheddata);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <p>
            <strong>Description:</strong> {data.description}
          </p>
          <p>
            <strong>Price:</strong> ${data.price}
          </p>
          <p>
            <strong>Discount:</strong> {data.discountPercentage}%
          </p>
          <p>
            <strong>Rating:</strong> {data.rating} ⭐
          </p>
          <p>
            <strong>Stock:</strong> {data.stock} units
          </p>
          <p>
            <strong>Tags:</strong> {data.tags.join(", ")}
          </p>
          <p>
            <strong>Brand:</strong> {data.brand}
          </p>
          <p>
            <strong>SKU:</strong> {data.sku}
          </p>
          <p>
            <strong>Weight:</strong> {data.weight} kg
          </p>

          <h3>Dimensions</h3>
          <p>
            <strong>Width:</strong> {data.dimensions.width} cm
          </p>
          <p>
            <strong>Height:</strong> {data.dimensions.height} cm
          </p>
          <p>
            <strong>Depth:</strong> {data.dimensions.depth} cm
          </p>

          <h3>Additional Information</h3>
          <p>
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>
          <p>
            <strong>Shipping Info:</strong> {data.shippingInformation}
          </p>
          <p>
            <strong>Availability:</strong> {data.availabilityStatus}
          </p>
          <p>
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>
          <p>
            <strong>Minimum Order:</strong> {data.minimumOrderQuantity} unit(s)
          </p>

          <h3>Metadata</h3>
          <p>
            <strong>Created At:</strong> {data.meta.createdAt.toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong> {data.meta.updatedAt.toLocaleString()}
          </p>
          <p>
            <strong>Barcode:</strong> {data.meta.barcode}
          </p>
          <p>
            <strong>QR Code:</strong> {data.meta.qrCode}
          </p>

          <h3>Images</h3>
          <p>
            <strong>Gallery:</strong> {data.images.join(", ")}
          </p>
          <p>
            <strong>Thumbnail:</strong> {data.thumbnail}
          </p>

          <h3>Customer Reviews</h3>
          {data.reviews.length > 0 ? (
            data.reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <p>
                  <strong>Reviewer:</strong> {review.reviewerName} (
                  {review.reviewerEmail})
                </p>
                <p>
                  <strong>Comment:</strong> {review.comment}
                </p>
                <p>
                  <strong>Rating:</strong> {review.rating} ⭐
                </p>
                <p>
                  <strong>Date:</strong> {review.date.toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FetchData;
