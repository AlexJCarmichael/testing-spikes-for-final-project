class Message < ActiveRecord::Base
  belongs_to :user

  def user_name
    user.email
  end

  def as_json(_ = nil)
    super(methods: [:created_time, :user_name])
  end
end
