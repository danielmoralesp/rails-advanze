class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    if current_user.present?
      current_user.apply_omniauth(request.env["omniauth.auth"])
      redirect_to edit_user_registration_path, notice: "Facebook account linked"
    else
      @user = User.from_omniauth(request.env["omniauth.auth"])
      sign_in_and_redirect @user
    end
  end
end
