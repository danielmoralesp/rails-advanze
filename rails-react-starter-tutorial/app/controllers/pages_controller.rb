# app/controllers/pages_controller.rb

class PagesController < ApplicationController
  def home
    @first_quote_id = Quote.first.id
  end
end
