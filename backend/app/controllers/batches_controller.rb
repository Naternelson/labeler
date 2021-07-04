class BatchesController < ApplicationController
    def index 
        batches = Batch.all
        render json: BatchSerializer.new(batches)
    end 
end
