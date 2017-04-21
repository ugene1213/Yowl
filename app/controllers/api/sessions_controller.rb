class Api::SessionsController < ApplicationController

  def create
  		@user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )

      if @user
  			login(@user)
  			render "api/users/show"
  		else
  			render(
          json: ["This is not a valid user"],
          status: 401
        )
  		end
  	end

  	def destroy 
  		@user = current_user
  		if @user
  			logout
        render 'static_pages/root.html.erb'
  		else
  			render(
          json: ["Nobody signed in"],
          status: 404
        )
  		end
  	end

end
