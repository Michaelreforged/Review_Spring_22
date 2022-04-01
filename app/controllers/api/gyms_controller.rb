class Api::GymsController < ApplicationController

  def gym_badges
    render json: Gym.w_badges
  end
  
  def create_gym
    gym = Gym.new(gym_params)
    if(gym.validate)
      gym.save
      render json: gym
    else
      p gym.errors.messages.to_hash
      render json: {errors: gym.errors.full_messages}, status: 422
    end
  end

  private

  def gym_params
    params.require(:pokemon).permit(:name)
  end 

end
