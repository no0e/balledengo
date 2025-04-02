import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    rating: 5,
    date: '2024-02-15',
    content: 'Excellent facilities! The field was in perfect condition and the staff was very helpful.',
    sport: 'Soccer'
  },
  {
    id: 2,
    rating: 4,
    date: '2024-02-10',
    content: 'Great courts, well maintained. The lighting system for evening games is fantastic.',
    sport: 'Tennis'
  },
  {
    id: 3,
    rating: 5,
    date: '2024-02-05',
    content: 'Best basketball courts in the area. The indoor facility is top-notch.',
    sport: 'Basketball'
  }
];

export default function FieldReviews() {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= averageRating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="font-medium">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-gray-600 text-sm ml-2">• {review.sport}</span>
              </div>
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}