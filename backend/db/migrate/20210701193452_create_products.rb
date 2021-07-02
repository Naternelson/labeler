class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :product_group_id
      t.float :sales_price
      t.float :purchase_price

      t.timestamps
    end
  end
end
