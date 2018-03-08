Rails.application.routes.draw do
  resources :episodes # http://cs-zombies.com/episodes

  constraints subdomain: 'api' do
    resources :zombies # http://api.cs-zombies.com/zombies
    resources :humans # http://api.cs-zombies.com/humans
  end
end
