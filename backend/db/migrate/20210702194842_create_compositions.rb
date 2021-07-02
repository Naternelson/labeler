class CreateCompositions < ActiveRecord::Migration[6.1]
  def change
    create_table :compositions do |t|
      t.integer :child_product_id
      t.integer :parent_product_id
      t.integer :qty

      t.timestamps
    end
  end
end
