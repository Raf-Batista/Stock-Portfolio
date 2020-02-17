class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        if user.save 
            token = login(user)
            render json: {name: user.name, email: user.email, id: user.id, token: token}
        else 
            render json: {errors: user.errors.full_messages} 
        end 
    end


    private 

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
