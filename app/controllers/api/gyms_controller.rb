class Api::GymsController < ApplicationController

  def with_badge
    render json: Gym.w_badges
  end

end
