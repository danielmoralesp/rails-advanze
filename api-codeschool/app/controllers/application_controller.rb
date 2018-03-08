class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session # la habilitamos para api
end
