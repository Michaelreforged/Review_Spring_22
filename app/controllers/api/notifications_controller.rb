class Api::NotificationsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.notifications.unread
  end

  def read_one
    read_notif = Notification.find(params[:id])
    read_notif.update(read_at:DateTime.now)
    render json: current_user.notifications.unread
  end

  def read_all
    current_user.notifications.unread.update_all(read_at:DateTime.now)
    render json:current_user.notifications.unread
  end


end
