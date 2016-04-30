class MessagesController < ApplicationController
  def index
    @messages = Message.all
    respond_to do |format|
      format.html do
        @messages
      end
      format.json do
        render json: @messages
      end
    end
  end

  def show
    @message = get_message
  end

  def edit
    @message = get_message
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(message_params)
      respond_to do |format|
        format.html do
          redirect_to @message
        end
        format.json do
          render json: { message: "Message updated" }
        end
      end
    end
  end

  def new
    @message = get_message
  end

  def create
    @message = current_user.messages.build(message_params)
    if @message.save
      respond_to do |format|
        format.html do
          redirect_to root_path
        end
        format.json do
          render json: { message: "Message posted!" }
        end
      end
    end
  end

  def destroy
  end

  private
  def get_message
    Message.find(params.fetch(:id))
  end

  def message_params
    params.require(:message).permit(:text, :user_id)
  end
end
