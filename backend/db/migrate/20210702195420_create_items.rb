class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :status
      t.string :location
      t.integer :batch_id
      t.integer :represents

      t.timestamps
    end
  end
end
