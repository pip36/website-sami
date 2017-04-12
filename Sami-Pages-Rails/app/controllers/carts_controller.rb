class CartsController < ApplicationController
  
  def show
    @cart = current_cart
    @orders = @cart.order_items
  end


end
