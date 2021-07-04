class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: ProductSerializer.new(products, set_params({batches: true, components: false}))
    end
end
