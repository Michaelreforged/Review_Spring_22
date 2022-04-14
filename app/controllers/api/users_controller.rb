class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def trainers 
    render json: User.filtered(current_user.id)
  end

  
end
