class Api::TrainersController < ApplicationController

  before_action :set_trainer, only:[:show, :update, :destroy]

  def index
    render json: Trainer.all
  end
 

  def show
    render json: @trainer
  end

  def create
    trainer = Trainer.new(trainer_params)
    if(trainer.save)
      render json: trainer
    else
      render json: {errors: trainer.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @trainer.destroy
  end

  def update
    if(@trainer.update(trainer_params))
      render json: @trainer
    else 
      render json: {errors: trainer.errors.full_messages}, status: 422
    end
  end

  private
  def set_trainer
    @trainer = Trainer.find(params[:id])
  end
  def trainer_params
    params.require(:trainer).permit(:name,:location)
  end

end
