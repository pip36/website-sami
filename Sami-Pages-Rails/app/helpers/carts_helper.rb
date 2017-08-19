module CartsHelper

  def current_cart

    if !Cart.find_by(id: session[:cart_id]).nil?
      @current_cart = Cart.find_by(id: session[:cart_id])
    else
      @current_cart = Cart.create
      session[:cart_id] = @current_cart.id
      @current_cart
    end
  end

  def cart_items_count
    current_cart.order_items.count
  end



  def complete_purchase(cart)
    orders = cart.order_items
    orders.each do |order|
      curr_stock = order.product.stock
      curr_order_quantity = order.quantity
      order.product.update_attribute("stock", curr_stock - curr_order_quantity)
    end
    #remove all cart order_items
    cart.order_items.destroy_all    
  end

end
