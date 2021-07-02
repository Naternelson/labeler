class Item < ApplicationRecord
    belongs_to :batch 
    has_many :uids

    def product 
        batch.product
    end
end
