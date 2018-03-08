Rails.application.routes.draw do
  with_options only: [:index, :edit, :update] do |list_only|
    list_only.resources :zombies
    list_only.resources :humans
    list_only.resources :medical_kits
  end
end
