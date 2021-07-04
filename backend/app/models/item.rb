class Item < ApplicationRecord
    belongs_to :batch 
    has_many :uids
    has_many :uid_params, through :uids 

    def product 
        batch.product
    end
end
