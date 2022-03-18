class Api::BadgesController < ApplicationController
  before_action :set_trainer
  before_action :set_badge, only:[:show,:update,:destroy]

  def index
    badges = @trainer.badges.all
    render json: badges
  end

  def show
    render json: @badge
  end

  def update
    if(@badge.update(badge_params))
      render json: @badge
    else
      render json:{errors: @badge.errors.full_messages}, status: 422
    end
  end

  def destroy
    @badge.destroy
    render json: @badge
  end

  def create
    @badge = Badge.new(badge_params)
    if(@badge.save)
      render json: @badge
    else 
      render json:{errors: @badge.errors.full_messages}, status: 422
    end
  end

  private
  def set_trainer
    @trainer = Trainer.find(params[:trainer_id])
  end

  def set_badge
    @badge = @trainer.badge.find(params[:id])
  end

  def badge_params
    params.require(:badge).permit(:trainer_id,:gym)
  end

end
