class MainController < ApplicationController
  def index
    @register = Register.new
    @categories = Category.all
    @items = Item.where(category_id: 1)
  end

  def create
    register = Register.new(register_params)
    if register.save
      redirect_to root_path
    end
  end
  private
  def register_params
    params.require(:register).permit(:category_name, :item_name)
  end

end
