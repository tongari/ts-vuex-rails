class SelectSearchesController < ApplicationController
  def index
    items = Item.where(category_id: params[:id])
    result_items = items.map do |item|
      {
        id: item.id,
        name: item.name
      }
    end
    render json: {
      :data => result_items
    }
  end
end
