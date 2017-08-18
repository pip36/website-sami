class OrderItemsController < ApplicationController
  def create
    @cart = current_cart

    @order_item = current_cart.order_items.new(order_item_params)

    if @order_item.save
      flash[:success] = @order_item.product.name + " has been added to cart."
      redirect_to(:back)
    else
      flash[:danger] = "Item has not been added"
      redirect_to(:back)
    end
  end



  def update
    @order = OrderItem.find(params[:id])
    @order.update_attributes(order_item_params)
    flash[:success] = "Shopping cart has been updated"
    redirect_to carts_show_url
  end

  def destroy
    OrderItem.find(params[:id]).destroy
    flash[:success] = "Item removed from shopping cart"
    redirect_to carts_show_url
  end



  private
  def order_item_params
    params.require(:order_item).permit(:product_id, :quantity, :total_price, :cart_id)
  end
end
