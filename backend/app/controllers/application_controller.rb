class ApplicationController < ActionController::API
    def set_params(args)
        {params: args}
    end
end
