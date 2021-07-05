class ProductGroupsController < ApplicationController
    def index
        pg = ProductGroup.all 
        render json: ProductGroupSerializer.new(pg)
    end
end
