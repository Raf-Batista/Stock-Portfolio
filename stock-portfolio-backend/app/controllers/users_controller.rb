class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        if user.save 
            render json: {success: "You have successfully registered"}
        else 
            render json: {error: user.errors.full_messages} 
        end 
    end


    private 

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
