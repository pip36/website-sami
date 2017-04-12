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

end
