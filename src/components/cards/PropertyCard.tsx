import React, { useState } from 'react';
import { Calendar, Maximize2, Bed, BedDouble, Bath, Clock, MapPin } from 'lucide-react';
import UserProfileShow from '../common/UserProfileShow';
import { Button, Tooltip, message } from 'antd';
import { IoTrash } from 'react-icons/io5';
import ReviewModal from '../common/ReviewModal';

interface PropertyCardProps {
  id?: string;
  image?: string;
  date?: string;
  title?: string;
  area?: string;
  beds?: string;
  bedrooms?: string;
  bathrooms?: string;
  time?: string;
  visitDate?: string;
  location?: string;
  price?: string;
  isFavorite?: boolean;
  status?: string;
  onclick?: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id = "1",
  image = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  date = "Vendredi 15th December",
  title = "Francisco",
  area = "20-500 m²",
  beds = "2 Bed",
  bedrooms = "2 Bedroom",
  bathrooms = "2 Bathroom",
  time = "10:00-16:00",
  visitDate = "Vendredi 15th December",
  location = "e.g. B. Berlin or Peak Fit...",
  price = "50,25 €",
  status,
  onclick,
}) => {

  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReviewSubmit = async (rating: number, review: string) => {
    try {
      setIsSubmitting(true);
      // Here you would typically make an API call to submit the review
      console.log('Submitting review:', { rating, review, propertyId: id });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      message.success('Thank you for your review!');
      setIsReviewModalVisible(false);
    } catch (error) {
      console.error('Error submitting review:', error);
      message.error('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article
      className="group bg-white p-4 rounded-xl  shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Property Image with Favorite Button */}
      <div className="relative w-full rounded-xl overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 "
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 space-y-3">
        {/* Date */}
        <div onClick={() => onclick?.(id as string)} className="cursor-pointer">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <time dateTime={visitDate} className="text-sm font-medium text-gray-700">
              {date}
            </time>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h2>

          {/* Property Details - Icons Row */}
          <div className="flex flex-wrap items-center gap-4 py-2 border-b border-gray-100">
            <div className="flex items-center gap-1.5 text-gray-600" title="Area">
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm">({area})</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600" title="Beds">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{beds}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600" title="Bedrooms">
              <BedDouble className="w-4 h-4" />
              <span className="text-sm">{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600" title="Bathrooms">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{bathrooms}</span>
            </div>
          </div>

          {/* Property Details - Info Row */}
          <div className="space-y-2 border-b border-gray-100 pb-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 shrink-0" />
              <time dateTime={visitDate}>{visitDate}</time>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="line-clamp-1" title={location}>{location}</span>
            </div>
          </div>
        </div>
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          {/* <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2DBEFF]">
            5
          </div> */}
          <div className="text-right flex items-center gap-2 justify-between w-full">
            <UserProfileShow name="John Doe" profile_image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" address="(France)" />
            <div className="text-2xl font-bold text-gray-900">{price}</div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {
            status === "pending" && (
              <Tooltip title="Delete">
                <Button style={{ width: '80px', }} icon={<IoTrash color="white" />} onClick={() => alert("Delete")} />
              </Tooltip>
            )
          }
        </div>
        <div className="flex items-center justify-end">
          {
            status === "completed" && (
              <>
                <Tooltip title="Leave a review">
                  <Button
                    style={{ backgroundColor: '#2DBEFF', color: 'white' }}
                    onClick={() => setIsReviewModalVisible(true)}
                  >
                    Leave a review
                  </Button>
                </Tooltip>
                <ReviewModal
                  visible={isReviewModalVisible}
                  onCancel={() => setIsReviewModalVisible(false)}
                  onSubmit={handleReviewSubmit}
                  loading={isSubmitting}
                />
              </>
            )
          }
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;