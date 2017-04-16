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
    @order = OrderItem.find(params[:id])
    @order.update_attributes(order_item_params)
    redirect_to carts_show_url
  end

  def destroy
    OrderItem.find(params[:id]).destroy
    redirect_to carts_show_url
  end

  private
  def order_item_params
    params.require(:order_item).permit(:product_id, :quantity, :total_price, :cart_id)
  end
end
