class CartsController < ApplicationController

  def show
    @cart = current_cart
    @orders = @cart.order_items
    @products = @cart.products
  end

  def purchase
    respond_to do |format|
      format.js 
    end
  end



end
