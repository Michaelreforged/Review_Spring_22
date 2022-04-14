class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  def trainers 
    render json: users.filtered(current_user.id)
  end

  
end
