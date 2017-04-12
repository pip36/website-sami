class OrderItemsController < ApplicationController
  def create
    @cart = current_cart

    @order_item = current_cart.order_items.new(order_item_params)

    if @order_item.save
      redirect_to carts_show_url
    else
      redirect_to products_index_url
    end
  end



  def update
  end

  def destroy
  end

  private
  def order_item_params
    params.require(:order_item).permit(:product_id, :quantity, :total_price, :cart_id)
  end
end
