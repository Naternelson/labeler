class CreateBatches < ActiveRecord::Migration[6.1]
  def change
    create_table :batches do |t|
      t.datetime :mfg
      t.datetime :exp
      t.integer :product_id

      t.timestamps
    end
  end
end
