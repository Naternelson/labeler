class CreateProductGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :product_groups do |t|
      t.string :name
      t.float :weight
      t.string :color
      t.float :length
      t.float :width
      t.float :height
      t.string :material

      t.timestamps
    end
  end
end
