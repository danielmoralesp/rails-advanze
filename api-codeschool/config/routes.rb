Rails.application.routes.draw do

  constraints subdomain: 'api' do
    namespace :api, path: '/' do
      resources :zombies # http://api.cs-zombies.com/zombies
      resources :humans # http://api.cs-zombies.com/humans
    end
  end

  resources :pages # http://cs-zombies.com/pages
end
