module API
  class ZombiesController < ApplicationController
    def index
      zombies = Zombie.all

      respond_to do |format|
        format.json { render json: zombies, status: 200 }
        format.xml { render xml: zombies, status: 200 }
      end
    end

    def show
      zombie = Zombie.find(params[:id])
      render json: zombie, status: 200
    end

    def create
      zombie = Zombie.new(zombie_params)

      if zombie.save
        render json: zombie, status: :created, location: zombies
      else
        render json: zombie.errors, status: 422
      end
    end

    private
      def zombie_params
        params.require(:zombie).permit(:name)
      end
  end
end
