

class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    render :index
  end

  def create
    @business = Business.new(business_params)
    if business.save
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    puts params[:id]
    @business = Business.find(params[:id])
  end

  private

  def business_params
    params.require(:business).permit(
      :name,
      :description,
      :lng,
      :lat,
      :address
    )
  end


end
