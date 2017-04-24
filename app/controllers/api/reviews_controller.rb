class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  def create
    review = Review.new(review_params)
    review.user_id  = current_user.id

    if review.save
      @business = review.business
      render "/api/businesses/show"
    else
      render json: review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :business_id)
  end
end
